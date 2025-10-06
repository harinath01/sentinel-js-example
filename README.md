## Installation

Include the built SDK files in your HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Your App</title>
    <link rel="stylesheet" href="./dist/sentinel-js-sdk.css">
</head>
<body>
    <!-- Your app content -->
    
    <!-- Required container for Sentinel UI -->
    <div id="tp-sentinel-ui"></div>
    
    <script src="./static/sentinel-sdk.es.js"></script>
    <script>
        // Use TPSentinelSDK from global scope
        const { TPSentinelSDK } = window.SentinelSDK;
    </script>
</body>
</html>
```

## Usage

### 1. Initialize SDK

```javascript
// Get SDK instance

const sdk = TPSentinelSDK.getInstance();

// Initialize with your organization code

sdk.initialize('your-org-code-here');
```

### 2. Start Proctoring

```javascript
// Start a proctoring session
const proctor = await sdk.startProctor('session-123', 'session-token-abc');
```

### 3. Set Checkpoint

```javascript
// Set a checkpoint within the session
await proctor.setCheckpoint('checkpoint-1');
```

### 4. Complete Checkpoint

```javascript
// Complete a checkpoint
await proctor.completeCheckpoint('checkpoint-1');
```

### 5. Capture Custom Events

```javascript
// Capture custom events
await proctor.capture('user_interaction', { 
    action: 'click', 
    element: 'submit-button' 
});
```

### 6. Stop Proctoring

```javascript
// Stop the proctoring session
await proctor.stop();
```

## Complete Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Certification Course</title>
  <link rel="stylesheet" href="./static/sentinel-sdk.css">
</head>
<body>
  <h1>Course: Equity Derivatives Certification</h1>

  <button id="start-course">Start Course</button>
  <button id="start-lesson">Start Lesson Checkpoint</button>
  <button id="complete-lesson">Complete Lesson</button>
  <button id="start-exam">Start Final Exam Checkpoint</button>
  <button id="complete-exam">Complete Exam</button>
  <button id="end-course">End Course</button>

  <div id="tp-sentinel-ui"></div>

  <script src="./static/sentinel-sdk.es.js"></script>
  <script>
    const { TPSentinelSDK } = window.SentinelSDK;

    class CourseProctor {
      constructor() {
        this.sdk = TPSentinelSDK.getInstance();
        this.proctor = null;
      }

      initialize() {
        try {
          this.sdk.initialize('org-nism'); // Example org code
          console.log('SDK initialized');
        } catch (error) {
          console.error('SDK initialization failed:', error);
        }
      }

      async startCourse() {
        try {
          // Create session for the workspace
          this.proctor = await this.sdk.startProctor('session-123', 'session-token-abc');
          console.log('Course session started');

          // The SDK will automatically handle device verification and permissions
          console.log('Device & identity check will be handled by SDK');
        } catch (error) {
          console.error('Failed to start course:', error);
        }
      }

      async startCheckpoint(checkpointId) {
        try {
          if (!this.proctor) {
            throw new Error('No active proctoring session. Start course first.');
          }
          await this.proctor.setCheckpoint(checkpointId);
          console.log(`Started checkpoint: ${checkpointId}`);
        } catch (error) {
          console.error('Failed to start checkpoint:', error);
        }
      }

      async completeCheckpoint(checkpointId) {
        try {
          if (!this.proctor) {
            throw new Error('No active proctoring session. Start course first.');
          }
          await this.proctor.completeCheckpoint(checkpointId);
          console.log(`Completed checkpoint: ${checkpointId}`);
        } catch (error) {
          console.error('Failed to complete checkpoint:', error);
        }
      }

      async endCourse() {
        try {
          if (!this.proctor) {
            throw new Error('No active proctoring session.');
          }
          await this.proctor.stop();
          this.proctor = null;
          console.log('Course session ended');
        } catch (error) {
          console.error('Failed to end course:', error);
        }
      }
    }

    // Initialize
    const course = new CourseProctor();
    course.initialize();

    // UI Handlers
    document.getElementById('start-course').addEventListener('click', () => course.startCourse());
    document.getElementById('start-lesson').addEventListener('click', () => course.startCheckpoint('chk-lesson-1'));
    document.getElementById('complete-lesson').addEventListener('click', () => course.completeCheckpoint('chk-lesson-1'));
    document.getElementById('start-exam').addEventListener('click', () => course.startCheckpoint('chk-exam-final'));
    document.getElementById('complete-exam').addEventListener('click', () => course.completeCheckpoint('chk-exam-final'));
    document.getElementById('end-course').addEventListener('click', () => course.endCourse());
  </script>
</body>
</html>
```

## API Reference

### TPSentinelSDK

#### `getInstance()`

Get the singleton instance of the SDK.

#### `initialize(orgCode)`

Initialize the SDK with your organization code.

**Parameters:**

* `orgCode` (string): Your organization code

#### `startProctor(sessionId, sessionToken)`

Start a proctoring session.

**Parameters:**

* `sessionId` (string): Unique session identifier
* `sessionToken` (string): Session authentication token

**Returns:** Proctor instance

### Proctor

#### `setCheckpoint(checkpointId)`

Set a checkpoint within the session.

**Parameters:**

* `checkpointId` (string): Checkpoint identifier

#### `completeCheckpoint(checkpointId)`

Complete a checkpoint.

**Parameters:**

* `checkpointId` (string): Checkpoint identifier to complete

#### `capture(eventName, eventData)`

Capture a custom event.

**Parameters:**

* `eventName` (string): Event name
* `eventData` (object): Event data

#### `stop()`

Stop the proctoring session.

## Requirements

* Modern browser with camera/microphone support
* HTTPS connection (required for media access)
* Container element with id `tp-sentinel-ui`
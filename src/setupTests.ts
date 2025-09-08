// Polyfills needed for MSW to work with Jest
import { TextEncoder, TextDecoder } from 'util';

// Add all necessary Web API polyfills for MSW
global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

// Mock structuredClone for Chakra UI
if (typeof global.structuredClone === 'undefined') {
  global.structuredClone = (obj: unknown) => {
    return JSON.parse(JSON.stringify(obj));
  };
}

// Mock TransformStream if it doesn't exist
if (typeof global.TransformStream === 'undefined') {
  global.TransformStream = class TransformStream {
    readable: unknown;
    writable: unknown;

    constructor(
      _transformer?: unknown,
      _writableStrategy?: unknown,
      _readableStrategy?: unknown,
    ) {
      // Basic mock implementation
      this.readable = {};
      this.writable = {};
    }
  } as typeof global.TransformStream;
}

// Mock BroadcastChannel if it doesn't exist
if (typeof global.BroadcastChannel === 'undefined') {
  global.BroadcastChannel = class BroadcastChannel {
    name: string;
    onmessage: ((event: MessageEvent) => void) | null = null;
    onmessageerror: ((event: MessageEvent) => void) | null = null;

    constructor(name: string) {
      this.name = name;
    }

    postMessage(_message: unknown): void {
      // Mock implementation
    }

    close(): void {
      // Mock implementation
    }

    addEventListener(_type: string, _listener: EventListener): void {
      // Mock implementation
    }

    removeEventListener(_type: string, _listener: EventListener): void {
      // Mock implementation
    }

    dispatchEvent(_event: Event): boolean {
      return true;
    }
  };
}

// Setup fetch polyfill
import 'whatwg-fetch';

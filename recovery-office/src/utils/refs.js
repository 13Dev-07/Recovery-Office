"use strict";
/**
 * Refs Utilities
 *
 * This module provides utility functions for handling React refs,
 * especially for combining multiple refs into a single ref callback.
 * This is particularly useful for components with ref forwarding
 * that also need to maintain internal refs.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRef = setRef;
exports.mergeRefs = mergeRefs;
exports.createRefCallback = createRefCallback;
exports.isRefCallback = isRefCallback;
exports.isRefObject = isRefObject;
/**
 * Set a single ref, safely handling different ref types
 *
 * @param ref The ref to set (can be a callback function or ref object)
 * @param value The value to set the ref to
 */
function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
}
/**
 * Merges multiple refs into a single ref callback
 * Useful for components that need to combine an externally forwarded ref
 * with internal refs
 *
 * @param refs Array of refs to merge
 * @returns A ref callback that sets all provided refs
 */
function mergeRefs(refs) {
    return function (value) {
        refs.forEach(function (ref) {
            if (ref)
                setRef(ref, value);
        });
    };
}
/**
 * Creates a callback ref that updates a state setter function
 * Useful when you need to store the ref value in a state variable
 *
 * @param setter State setter function to call with the ref value
 * @returns A ref callback that updates the state when the ref changes
 */
function createRefCallback(setter) {
    return function (value) {
        setter(value);
    };
}
/**
 * Type guard to check if a ref is a callback function
 *
 * @param ref The ref to check
 * @returns True if the ref is a callback function
 */
function isRefCallback(ref) {
    return typeof ref === 'function';
}
/**
 * Type guard to check if a ref is a ref object
 *
 * @param ref The ref to check
 * @returns True if the ref is a ref object
 */
function isRefObject(ref) {
    return ref !== null && typeof ref === 'object' && 'current' in ref;
}

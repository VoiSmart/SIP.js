/**
 * Configuration for SessionDescriptionHandler.
 * @public
 */
export interface SessionDescriptionHandlerConfiguration {
  /**
   * The maximum duration to wait in ms for ICE gathering to complete.
   * If undefined, implementation dependent.
   * If zero, no timeout.
   */
  iceGatheringTimeout?: number;

  /**
   * The maximum duration to wait after first ICE candidate received.
   * If zero, no timeout.
   */
  iceCandidatesTimeout?: number;

  /**
   * Peer connection options.
   */
  peerConnectionConfiguration?: RTCConfiguration;
}

export type UpdateInfo = {
  readonly files: { sha512: string; size: number; url: string }[];
  /**
   * The version.
   */
  readonly version: string;
  /**
   * The release name.
   */
  readonly releaseName?: string | null;
  /**
   * The release notes. List if `updater.fullChangelog` is set to `true`, `string` otherwise.
   */
  readonly releaseNotes?: string | null;
  /**
   * The release date.
   */
  readonly releaseDate: string;
  /**
   * The [staged rollout](/auto-update#staged-rollouts) percentage, 0-100.
   */
  readonly stagingPercentage?: number;
};

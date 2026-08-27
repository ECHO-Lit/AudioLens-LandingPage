import { ComponentType } from "react";
import { IntroductionSection } from "./intro";
import { QuickstartSection, QUICKSTART_TOC } from "./quickstart";
import { CoreConceptsSection } from "./concepts";
import { LoadingDatasetsSection } from "./datasets";
import { SaliencyMappingSection } from "./saliency";
import { AttentionSection } from "./attention";
import { EmbeddingProjectorSection } from "./embeddings";
import { PerturbationLabSection } from "./perturb";
import { FairnessSlicesSection } from "./fairness";
import { WhisperSection } from "./whisper";
import { Wav2VecSection } from "./wav2vec";
import { CustomCheckpointsSection } from "./custom";
import { DeviceSelectionSection } from "./devices";
import { RestApiSection } from "./rest";
import { EnvironmentVariablesSection } from "./env";
import { ArchitectureSection } from "./arch";
import { CliSection } from "./cli";

export type TocItem = { id: string; label: string };

export const SECTIONS: Record<string, ComponentType> = {
  intro: IntroductionSection,
  quickstart: QuickstartSection,
  concepts: CoreConceptsSection,
  datasets: LoadingDatasetsSection,
  saliency: SaliencyMappingSection,
  attention: AttentionSection,
  embeddings: EmbeddingProjectorSection,
  perturb: PerturbationLabSection,
  fairness: FairnessSlicesSection,
  whisper: WhisperSection,
  wav2vec: Wav2VecSection,
  custom: CustomCheckpointsSection,
  devices: DeviceSelectionSection,
  rest: RestApiSection,
  env: EnvironmentVariablesSection,
  arch: ArchitectureSection,
  cli: CliSection,
};

// Only sections with in-page subsections get a right-hand "On this page" TOC.
export const TOC_BY_SECTION: Record<string, TocItem[]> = {
  quickstart: QUICKSTART_TOC,
};

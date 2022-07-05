import { getModuleFromStudyMap, StudyUnitStatusMutator } from '../study-map';
import { LearningService } from './learning-service';
import { ProblemSetRepository } from './problemset-repository';

type LearningInstanceIdentifier =
	'LEARNING_SERVICE';

type LearningDomainInstances = LearningService | null;

const instances: Record<LearningInstanceIdentifier, LearningDomainInstances> = {
	'LEARNING_SERVICE': null
};

function initLearningModules() {
	const studyUnitStatusMutator = <StudyUnitStatusMutator> getModuleFromStudyMap('STUDY_UNIT_MUTATOR');

	const problemSetRepository = new ProblemSetRepository();
	instances.LEARNING_SERVICE = new LearningService({
		problemSetRepository, studyUnitStatusMutator
	});
}

function getModuleFromLearningModule<T extends LearningDomainInstances>(identifier: LearningInstanceIdentifier): T {
	const instance = instances[identifier];
	if (!instance) {
		throw new Error(`instance not have been initialized: ${identifier}`);
	}
	return <T> instance;
}

export {
	initLearningModules,
	getModuleFromLearningModule,

	LearningService
};

import { StudyUnitHistoryRepository } from './study-unit-history-repository';
import { StudyMapService } from './study-map-service';
import { StudyUnitMutatorWithTransaction } from './study-unit-status-mutator-with-tx';
import { StudyUnitStatusMutator } from './study-unit-status-mutator.interface';

type StudyMapInstanceIdentifier =
	'STUDY_MAP_SERVICE' | 'STUDY_UNIT_MUTATOR';

type StudyMapDomainInstances =
	StudyMapService | StudyUnitStatusMutator | null;

const instances: Record<StudyMapInstanceIdentifier, StudyMapDomainInstances> = {
	'STUDY_MAP_SERVICE': null,
	'STUDY_UNIT_MUTATOR': null
};

function initStudyMapModules() {
	const studyUnitHistoryRepository = new StudyUnitHistoryRepository();

	instances.STUDY_MAP_SERVICE = new StudyMapService({
		studyUnitHistoryRepository
	});

	instances.STUDY_UNIT_MUTATOR = new StudyUnitMutatorWithTransaction();
}

function getModuleFromStudyMap<T extends StudyMapDomainInstances>(identifier: StudyMapInstanceIdentifier): T {
	const instance = instances[identifier];
	if (!instance) {
		throw new Error(`instance not have been initialized: ${identifier}`);
	}
	return <T> instance;
}

export {
	initStudyMapModules,
	getModuleFromStudyMap,

	StudyMapService,
	StudyUnitStatusMutator
};

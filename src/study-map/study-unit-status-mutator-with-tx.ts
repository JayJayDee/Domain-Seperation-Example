import { StudyUnitCompleteParam, StudyUnitIdentifier, StudyUnitStatusMutator } from './study-unit-status-mutator.interface';

export class StudyUnitMutatorWithTransaction implements StudyUnitStatusMutator {

	public async completeStudyUnit(id: StudyUnitIdentifier, completeParam: StudyUnitCompleteParam): Promise<void> {
		
	}
}

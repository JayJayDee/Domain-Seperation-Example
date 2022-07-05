
export type StudyUnitIdentifier = {
	studyUnitId: number;
};

export type MainProblem = {
	problemId: number;
	score: number;
	result: 'CORRECT' | 'INCORRECT' | 'CORRECT_AFTER_STEP';
};

export type StudyUnitCompleteParam = {
	mainProblems: MainProblem[];
};

export interface StudyUnitStatusMutator {

	/**
	 * mutates the given StudyUnit status to completed
	 * @param id Identifier of StudyUnit
	 * @param completeParam Required information to calculate StudyUnitResult
	 */
	completeStudyUnit(id: StudyUnitIdentifier, completeParam: StudyUnitCompleteParam): Promise<void>;
}

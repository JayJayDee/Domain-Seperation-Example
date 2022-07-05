import { StudyUnitStatusMutator } from '../study-map';
import { ProblemSetRepository } from './problemset-repository';

export class LearningService {

	private readonly problemSetRepository: ProblemSetRepository;
	private readonly studyUnitStatusMutator: StudyUnitStatusMutator;

	constructor({
		problemSetRepository,
		studyUnitStatusMutator
	}: {
		problemSetRepository: ProblemSetRepository,
		studyUnitStatusMutator: StudyUnitStatusMutator
	}) {
		this.problemSetRepository = problemSetRepository;
		this.studyUnitStatusMutator = studyUnitStatusMutator;
	}

	public async solveMainProblem() {
		const isProblemSetDone = await this.problemSetRepository.isProblemSetDone();
		const studyUnitId = 1;

		if (isProblemSetDone) {
			await this.studyUnitStatusMutator.completeStudyUnit({ studyUnitId }, {
				mainProblems: []
			});
		}
	}
}

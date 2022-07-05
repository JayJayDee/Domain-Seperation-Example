import { StudyUnitHistoryRepository } from './study-unit-history-repository';

export class StudyMapService {

	private readonly studyUnitHistoryRepository: StudyUnitHistoryRepository;

	constructor({
		studyUnitHistoryRepository
	}: {
		studyUnitHistoryRepository: StudyUnitHistoryRepository
	}) {
		this.studyUnitHistoryRepository = studyUnitHistoryRepository;
	}
}

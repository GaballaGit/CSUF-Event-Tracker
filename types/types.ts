
export interface Event {
	id: number;
	name: string;
	host: string;
	time: number;
	description: string;
	location: string;
	tags: string[];
	organizer: string;
	image: string;
}

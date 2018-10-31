export interface ICard {
    id: string;
    badges: Object;
    checkItemStates: any[];
    closed: boolean;
    dateLastActivity: Date;
    desc: string;
    descData: any;
    due: Date;
    dueComplete: boolean;
    idAttachmentCover: string;
    idBoard: string;
    idChecklists: string[];
    idList: string;
    idMembers: string[];
    idMembersVoted: string[];
    idShort: number;
    labels: any[];
    manualCoverAttachment: boolean;
    name: string;
    pos: number;
    shortLink: string;
    shortUrl: string;
    subscribed: boolean;
    url: string;
}

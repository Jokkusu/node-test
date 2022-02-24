export class LottiEditModel {
    name: string;
    description: string;
    lottiImage: string;
    lottiValue: number;
    maxAllowedPlaysPerUser: number;
    allowedPlayingMechanism: number[];
    active: boolean;
    playDate: Date | string;

    constructor(
        name: string,
        description: string,
        lottiImage: string,
        lottiValue: number,
        maxAllowedPlaysPerUser: number,
        allowedPlayingMechanism: number[],
        active: boolean,
        playDate: Date
    ) {
        this.name = name
        this.description = description
        this.lottiImage = lottiImage
        this.lottiValue = lottiValue
        this.maxAllowedPlaysPerUser = maxAllowedPlaysPerUser
        this.allowedPlayingMechanism = allowedPlayingMechanism
        this.active = active
        this.playDate = playDate
    }

    get Name(): string {
        return this.name;
    }
    get Description(): string {
        return this.description;
    }
    get LottiImage(): string {
        return this.lottiImage;
    }
    get LottiValue(): number {
        return this.lottiValue;
    }
    get MaxAllowedPlaysPerUser(): number {
        return this.maxAllowedPlaysPerUser;
    }
    get AllowedPlayingMechanism(): number[] {
        return this.allowedPlayingMechanism;
    }
    get Active(): boolean {
        return this.active;
    }
    get PlayDate(): Date | string {
        return this.playDate;
    }
}
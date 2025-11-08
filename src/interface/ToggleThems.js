export class ToggleThemes {

    constructor(
        toggle = this.them
    )

    getStyleForThems(toggle) {
        return (toggle ? 'lightThems.css' : 'DarkThems.css');
    }
}
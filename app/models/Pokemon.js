

export class Pokemon {
  constructor(data) {
    this.id = data.id || null
    this.name = data.name
    this.url = data.url
    this.img = data.sprites.other.dream_world.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
  }

  get activeTemplate() {
    // return `${this.FormatTypes}`
  }


  get FormatTypes() {
    let content = ''
    this.types.forEach(type => {
      content += type.type.name
    })
    return content
  }


}


class Classic {
  constructor(art_url = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg') {
    this.frame = 'black-border';
    this.art_url = art_url;
  }
  render() {
    let img = document.createElement('img');
    img.src=this.art_url;
    img.className = this.frame;
    document.body.appendChild(img);

  }
}

var art1 = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg");

class Meme extends Classic {
  constructor(art_url) {
    super();
    this.art_url = art_url;
    this.frame = 'chartreuse-border';
  }
  //
  // render(){
  //   super.render();
  // }
}

var meme1 = new Meme("http://i0.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg")
meme1.render();

// art1.render();

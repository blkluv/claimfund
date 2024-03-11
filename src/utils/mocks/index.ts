class Index {
  constructor(
    title: string,
    image: URL | string,
    description: string,

    author: {
      image: URL | string,
      name: string,

      socials: [{
        type: 'twitter (X)' | 'facebook' | 'youtube' | string,
        link: URL
      }],
      boolFields: [{
        text: string,
        is: boolean
      }]
    },
    stats: {
      currency: string
      balance: number,
      withdrawn: number,
      goal: number
    },
    contribution: {
      title: string,
      fee: string,
      options: [{
        id: string,
        title: string,
        description: string
      }],
      field1Placeholder: string,
      field2Placeholder: string,
      buttonText: string,
      contributionsText: string,
    },
    smallFontTextsUnderMainElementThatSayYouAreObligedToSellYourSoulToTheDevilAfterTransaction: { // why not? 🙃
      text: string,
      buttons: [{
        text: string,
        action: Function
      }]
    }
  ) { }
}

export const mock = new Index(
  "Claim Fund",
  "jar.png",
  "Help for Ukraine.<br/>Charity fund to help military.",
  {
    image: "author.png",
    name: "Mike",
    socials: [{
      type: 'twitter (X)',
      link: new URL("https://twitter.com/miketimashov")
    }],
    boolFields: [
      {
        text: "Verified",
        is: true
      }, {
        text: "KYC",
        is: false
      }
    ]
  },
  {
    currency: "USDC",
    balance: 123_456,
    withdrawn: 0,
    goal: 1_000_000
  },
  {
    title: "Top up amount",
    fee: "+0.001 SOL processing fee",
    options: [
      {
        id: 0,
        title: "+5 USDC",
        description: "(5$)"
      },
      {
        id: 1,
        title: "+25 USDC",
        description: "(25$)"
      },
      {
        id: 2,
        title: "+50 USDC",
        description: "(50$)"
      }
    ],
    field1Placeholder: "Your name (optional)",
    field2Placeholder: "Comment (optional)",
    buttonText: "Connect Wallet",
    contributionsText: "List of contributions"
  },
  {
    text: "Claim Fund is not responsible for any fundraising.<br/>By making a donation you accept our <a href='' target='blank_'>Privacy Policy</a> and <a href='' target='blank_'>Terms of Use</a>.",
    buttons: [
      {
        text: "Start fundraising",
        action: function(){
          console.log(this.text);
        }
      },{
        text: "Streaming widget",
        action: function(){
          console.log(this.text);
        }
      },{
        text: "Run a raffle",
        action: function(){
          console.log(this.text);
        }
      }
    ]
  }
)
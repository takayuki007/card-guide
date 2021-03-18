<template>
  <main class="main">
    <div class="presentation" v-bind:class="{invisible:presentation}">
      <h2 class="heading">ぴったりのクレジットカードを<br class="sp-br">提案いたします。</h2>
      <p class="text text-center">質問に答えて<br class="sp-br">クレジットカードを提案してもらおう！</p>
    </div>
    <div class="question" v-bind:class="{invisible: annualFee}">
      <p class="text text-center">Q1.年会費は無料がいい？</p>
      <div class="choices">
        <p class="text choice choice-blue" v-on:click="free">無料がいい！</p>
        <p class="text choice choice-red" v-on:click="paid">有料でもいい！</p>
      </div>
    </div>
    <div class="question js-travel" v-show="travel">
      <p class="text text-center">Q2.よく旅行に行く？</p>
      <div class="choices">
        <p class="text choice choice-blue" v-on:click="go">旅行に行く！</p>
        <p class="text choice choice-red" v-on:click="notGo">旅行に行かない！</p>
      </div>
    </div>
    <div class="question js-miles" v-show="miles">
      <p class="text text-center">Q2.マイル重視？<br class="sp-br">それともステータス重視？</p>
      <div class="choices">
        <p class="text choice choice-blue" v-on:click="milesImportant">マイル重視！</p>
        <p class="text choice choice-red" v-on:click="statusImportant">ステータス重視！</p>
      </div>
    </div>
    <div class="answer js-cedyna" v-bind:class="{invisible: cedyna}">
      <h2 class="heading">あなたにおすすめのカードは・・・</h2>
      <img src="@/assets/img/cedyna.jpg" alt="card" class="img">
      <h3 class="card-name text-center">セディナカード</h3>
      <p class="text answer-text text-center">
        海外旅行に行くと何かと必要な現地通貨。<br class="pc-br">
        セディナカードを使えば海外キャッシングで<br class="pc-br">
        割安で現地通貨を調達できちゃいます。<br class="pc-br">
      </p>
      <a href="https://www.cedyna.co.jp/card/lineup/detail/cedyna/" class="text toOfficial text-center" target="_blank">→公式サイトはこちら！</a>
    </div>
    <div class="answer js-smbc" v-bind:class="{invisible: smbc}">
      <h2 class="heading">あなたにおすすめのカードは・・・</h2>
      <img src="@/assets/img/smbc.png" alt="card" class="img">
      <h3 class="card-name text-center">三井住友カード</h3>
      <p class="text answer-text text-center">
        決済に便利なカードは三井住友カード<br class="pc-br">
        Apple Payを使えば、スマホだけでも決済可能。<br class="pc-br">
        タッチIDを使えば、1秒で決済完了<br class="pc-br">
      </p>
      <a href="https://www.smbc-card.com/nyukai/numberless/index.html" class="text text-center toOfficial" target="_blank">→公式サイトはこちら！</a>
    </div>
    <div class="answer js-ana" v-bind:class="{invisible: ana}">
      <h2 class="heading">あなたにおすすめのカードは・・・</h2>
      <img src="@/assets/img/ana.png" alt="card" class="img">
      <h3 class="card-name text-center">ANAアメリカンエキスプレスカード</h3>
      <p class="text text-center answer-text">
        マイルを効率よく貯めるならこの1枚。<br class="pc-br">
        普段のお買い物から公共料金のお支払いまで幅広く対応。<br class="pc-br">
        マイルを貯めて旅行に行こう！<br class="pc-br">
      </p>
      <a href="https://www.americanexpress.com/jp/credit-cards/ana-classic-card/" class="text text-center toOfficial" target="_blank">→公式サイトはこちら！</a>
    </div>
    <div class="answer js-amex" v-bind:class="{invisible: amex}">
      <h2 class="heading">あなたにおすすめのカードは・・・</h2>
      <img src="@/assets/img/platinum.png" alt="card" class="img">
      <h3 class="card-name text-center">アメリカンエキスプレス<br class="sp-br">プラチナカード</h3>
      <p class="text text-center answer-text">
        ステータスを重視するならこの1枚。<br class="pc-br">
        ステータスマッチでいきなりゴールド会員になれちゃうことも！<br class="pc-br">
        きっとあなたの生活を豊かにしてくれる！<br class="pc-br">
      </p>
      <a href="https://www.americanexpress.com/jp/credit-cards/platinum-card/" class="text text-center toOfficial" target="_blank">→公式サイトはこちら！</a>
    </div>
  </main>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Main',
  // props: {
  //   msg: String
  // },
  data:function (){
    return{
      annualFee: false,
      travel: false,
      miles: false,
      cedyna: true,
      smbc: true,
      ana: true,
      amex: true,
      presentation: false
    }
  },
  methods:{
    //Q1.年会費は無料がいい？
    //無料がいい！を選択
    free: function (){
      this.annualFee = true;
      this.travel = !this.travel;
      $('.js-travel').fadeIn(3000)
    },
    //有料がいい！を選択
    paid: function (){
      this.annualFee = true;
      this.miles = true;
      $('.js-miles').fadeIn(3000)
    },
    //Q2.よく旅行に行く？
    //旅行に行く！を選択
    go: function (){
      this.travel = false;
      this.presentation = true;
      this.cedyna = false;
      $('.js-cedyna').fadeIn(3000);
    },
    //旅行に行かない！を選択
    notGo:function (){
      this.travel = false;
      this.presentation = true;
      this.smbc = false;
      $('.js-smbc').fadeIn(3000)
    },
    //Q2.マイル重視？それともステータス重視？
    //マイル重視！を選択
    milesImportant:function (){
      this.miles = false;
      this.presentation = true;
      this.ana = false;
      $('.js-ana').fadeIn(3000)
    },
    //ステータス重視！を選択
    statusImportant:function (){
      this.miles = false;
      this.presentation = true;
      this.amex = false;
      $('.js-amex').fadeIn(3000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

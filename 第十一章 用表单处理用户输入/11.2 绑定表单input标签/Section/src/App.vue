<template lang="html">
 <div id="container">
    <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="Mail">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="Password"
                                >
                                <p>{{yanzheng()}}</p>
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="Age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="Message"
                            ></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    v-model="send"
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    > Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    v-model="send"
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                v-model="gender"
                                type="radio"
                                id="male"
                                value="Male"> Male
                    </label>
                    <label for="female">
                        <input
                                v-model="gender"
                                type="radio"
                                id="female"
                                value="Female"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            v-model="selected"
                            id="priority"
                            class="form-control">
                        <option v-for="item in priority">{{item}}</option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            @click.prevent="flag=true"
                            class="btn btn-primary">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="flag">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail:{{Mail}}</p>
                        <p>Password:{{Password}}</p>
                        <p>Age:{{Age}}</p>
                        <p>Message:{{Message}} </p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in send">{{item}}</li>
                        </ul>
                        <p>Gender:{{gender}}</p>
                        <p >Priority:{{selected}}</p>
                        <p>Switched:</p>
                    </div>
                </div>
            </div>
        </div>

 </div>
</template>

<script>
export default {
  data () {
    return {
      Mail:"",
      Password:"",
      Age:"",
      Message:"",
      send:[],
      gender:"Male",
      priority:["red","yellow","high"],
      selected:"",
      flag:false
    }
  },
  methods:{
    yanzheng:function(){
      if(this.Password==""){
        return
      }else if(this.Password=="123456"){
        return "密码正确"
      } else{
        return "密码错误"
      }
    }
  }
}
</script>

<style>

</style>

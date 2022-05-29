<template>
	<div class="container">
		<div class="box">
			<ui-icon class="icons">people_alt</ui-icon>
			<div class="item">
			<ui-form-field class="form-item">
			<ui-textfield
      class="uiInput"
      id="email"
			v-model="formData.email"
      helper-text-id="my-text-field-helper-text"
      >
      Email
      </ui-textfield>
			</ui-form-field>
			</div>
			<div class="item2">
			<ui-form-field class="form-item">
			<ui-textfield
      class="uiInput"
      id="senha"
			input-type="password"
      helper-text-id="my-text-field-helper-text"
			v-model="formData.senha"
      >
      Senha
      </ui-textfield>
			</ui-form-field>
			</div>	
			
		<div class="message error">
			<ui-alert v-if="messages.length" state="error" id="erro">
				<ul>
					<li v-for="(message, index) in messages" :key="index">{{ message }}</li>
				</ul>
			</ui-alert>
		</div>
		<ui-form-field>
      <ui-button class="saveButton" @click="login2()" raised>Entrar</ui-button>
    </ui-form-field>
		</div>
	</div>
</template>
<script src="./LoginComponent.js"></script>
<style lang="scss" scoped>
  @import "./LoginComponent.scss";
</style>
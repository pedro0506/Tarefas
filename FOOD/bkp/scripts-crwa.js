/*
* Script 
* Página: Login / Minha Conta
* 
*
*
*/
jQuery(document).ready(function() {
	jQuery('form#loginform').submit(function(){
		
		// Validação basica -- Para o caso do usuário não preencher nada
		var bloqueia = false;
		setTimeout(function(){
			jQuery("form#loginform input#wp-submit").val("");
			jQuery("form#loginform input#wp-submit").addClass("ajaxLoaderActive");
			jQuery("form#loginform input#wp-submit .ajaxLoaderActive").prop("disabled", true);
			jQuery("form#loginform input#wp-submit").css("background", "#673f53");
			jQuery("form#loginform input#wp-submit").css("cursor", "no-drop");
		}, 100);
		
		if (jQuery('#user_login').val().length <= 0){
			bloqueia = true; 
			jQuery("#user_login").css("cssText", "border: 1px solid #e45858 !important;");
		}else{
			jQuery("#user_login").css("cssText", "border: 1px solid #e2e2e2 !important;");
		}
		if (jQuery('#user_pass').val().length <= 0){
			bloqueia = true;
			jQuery("#user_pass").css("cssText", "border: 1px solid #e45858 !important;");
		}else{
			jQuery("#user_pass").css("cssText", "border: 1px solid #e2e2e2 !important;");
		}

		setTimeout(function(){
			jQuery("form#loginform input#wp-submit .ajaxLoaderActive").prop("disabled", false);
			jQuery("form#loginform input#wp-submit").removeClass('ajaxLoaderActive');
			jQuery("form#loginform input#wp-submit").val("entrar na minha conta");
			jQuery("form#loginform input#wp-submit").css("background", "#791144");
			jQuery("form#loginform input#wp-submit").css("cursor", "pointer");
			jQuery('html').animate({scrollTop:0}, 'slow');
		}, 1000);

		var retornoEmail = true;
		var retornoEmailSenha = true;

 		if(bloqueia == false) {  // IF - Validação basica
		// Se usuario preencheu algo continua a validar
		
			// Validação de Email Ajax
			var params1 = {
	    		verify_email: document.getElementById('user_login').value
	    	}
    		jQuery.ajax({
	    		url: "http://propagandarapida.com.br/verificar-email-header.php",
	    		type: "get",
	    		dataType: "html",
	    		data: params1,
	    		async: false,
	    		success: function(data){
	    			jQuery("#user_login").removeClass("ajaxLoaderActive");
			    	if (data == 'Este email não existe.'){
			            retornoEmail = false;
			        	jQuery("#user_login").val("");
						jQuery("#user_login").attr("placeholder", data);
						jQuery("#user_login").css("cssText", "border: 1px solid #e45858 !important;");
					}else{
						retornoEmail = true;
			              jQuery("#user_login").css("cssText", "border: 1px solid green !important;");
			              
							// Testa email e senha
							var params2 = {
	    						verify_email: document.getElementById('user_login').value,
	    						verify_pass: document.getElementById('user_pass').value
	    					}
	    					jQuery.ajax({
	    						url: "http://propagandarapida.com.br/verificar-email-login-header.php",
	    						type: "get",
	    						dataType: "html",
	    						data: params2,
	    						async: false,
	    						success: function(data){
							        if (data == 'Senha digitada incorreta'){
			 				           retornoEmailSenha = false;
			 				           jQuery("#user_pass").val("");
										jQuery("#user_pass").attr("placeholder", data);
										jQuery("#user_pass").css("cssText", "border: 1px solid #e45858 !important;");
							        }else{
							        	retornoEmailSenha = true;
							            jQuery("#user_pass").css("cssText", "border: 1px solid green!important;");
							        }    				
	    						}
							});
			  
			         }
	    		}
			});			        
        } // Fim do IF - Passou da validação basica
        if((retornoEmail) && (retornoEmailSenha) && (bloqueia == false)){
        	setTimeout(function(){
			jQuery("form#loginform input#wp-submit").val("");
			jQuery("form#loginform input#wp-submit").addClass("ajaxLoaderActive");
			jQuery("form#loginform input#wp-submit .ajaxLoaderActive").prop("disabled", true);
			jQuery("form#loginform input#wp-submit").css("background", "#673f53");
			jQuery("form#loginform input#wp-submit").css("cursor", "no-drop");
		}, 100);
        	return true;
        }
        else {
        	return false;
        }
	})
});

   if (window.XMLHttpRequest){
          xmlhttp = new XMLHttpRequest();
      } else if (window.ActiveXObject){
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }else{
          alert ("Seu navegador não tem suporte para Ajax");
      }
	
function verifyEmail(){
                    var veryemail = document.getElementById('pre_email').value;
                    xmlhttp.open('GET','http://propagandarapida.com.br/verificar-email.php?verify_email='+veryemail,true);
                    xmlhttp.send(); 
                    jQuery("#pre_email").addClass("ajaxLoaderActive");
                    xmlhttp.onreadystatechange = function() {
                            if (xmlhttp.readyState == 4){
                                console.log('Iniciando conexão para status 200');
                                if (xmlhttp.status == 200){
                                        jQuery("#pre_email").removeClass("ajaxLoaderActive");                                     
				  															if(xmlhttp.responseText == "Este e-mail já possui cadastro."){
																					jQuery("#pre_email").val("");
																					jQuery("#pre_email").attr("placeholder", xmlhttp.responseText);
																				} else{
																					jQuery("#pre_email").val(xmlhttp.responseText);
																				}
                                } else {
                                        console.log('Houve um erro, e não foi possivel obter a resposta');
                                }
                            }else {
                                console.log('Nao foi possivel iniciar conexão para status 200');
                            }
                        } 
                }               
	
	jQuery("form.pre_cadastro_mc").submit(function(){
     var bloqueia = false;
     setTimeout(function(){
        jQuery("input#btnprecad").val("");
        jQuery("input#btnprecad").addClass("ajaxLoaderActive");
        jQuery("input#btnprecad .ajaxLoaderActive").prop("disabled", true);
		jQuery("input#btnprecad").css("background", "#673f53");
		jQuery("input#btnprecad").css("cursor", "no-drop");
     }, 100);
     jQuery("input#pre_name").css("cssText", "border: 0 !important;");
     jQuery("input#pre_tel").css("cssText", "border: 0 !important;");
	 jQuery("input#pre_email").css("cssText", "border: 0 !important;");
	 jQuery("input#pre_cep").css("cssText", "border: 0 !important;");

     if (jQuery('input#pre_name').val().length <= 0){
      bloqueia = true; 
      jQuery("input#pre_name").css("cssText", "border: 1px solid #e45858 !important;");
     }
     if (jQuery('input#pre_tel').val().length <= 0){
      bloqueia = true;
      jQuery("input#pre_tel").css("cssText", "border: 1px solid #e45858 !important;");
     }
	 if (jQuery('input#pre_email').val().length <= 0){
      bloqueia = true;
      jQuery("input#pre_email").css("cssText", "border: 1px solid #e45858 !important;");
     }
	 if (jQuery('input#pre_cep').val().length <= 0){
      bloqueia = true;
      jQuery("input#pre_cep").css("cssText", "border: 1px solid #e45858 !important;");
     }
     setTimeout(function(){
      jQuery("input#btnprecad .ajaxLoaderActive").prop("disabled", false);
        jQuery("input#btnprecad").removeClass('ajaxLoaderActive');
        jQuery("input#btnprecad").val("entrar na minha conta");
		jQuery("input#btnprecad").css("background", "#791144");
		jQuery("input#btnprecad").css("cursor", "pointer");
     }, 1000);
     if(bloqueia){
      return false; 
     }
});

/*
* Script 
* Página: Esqueceu sua senha
* 
*
*
*/

	jQuery.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
}
var email = jQuery.urlParam('login');
jQuery('#atualizar_nova_senha_rs').click(function(){
	var bloqueia = false;
    setTimeout(function(){
      jQuery("#atualizar_nova_senha_rs").val("");
	  	jQuery("#atualizar_nova_senha_rs").css("background", "#673f53");	
      jQuery("#atualizar_nova_senha_rs").addClass("ajaxLoaderActive");
      jQuery("#atualizar_nova_senha_rs .ajaxLoaderActive").prop("disabled", true);
      jQuery("#atualizar_nova_senha_rs").css("cursor", "no-drop");
    }, 100);
    var x = jQuery('input#nova_senha_rs').val();
    if(x == ''){
    	jQuery('#erro-comentario').text('');
    	jQuery('#erro-comentario').css('opacity','1');
    	jQuery('#erro-comentario').text('Digite sua nova senha');
    	jQuery('input#nova_senha_rs').addClass('borda-erro');
		bloqueia = true;
    }else if(jQuery('input#nova_senha_rs').val().length < 6 ){
    	jQuery('input#nova_senha_rs').removeClass('borda-erro');
    	jQuery('#erro-comentario').text('');
    	jQuery('#erro-comentario').css('opacity','1');
    	jQuery('#erro-comentario').text('Senha menor que 6 dígitos');
		jQuery('input#nova_senha_rs').addClass('borda-erro');
		bloqueia = true;
    }else if(jQuery('input#confirme_nova_senha_rs').val().length < 6 ){
    	jQuery('input#nova_senha_rs').removeClass('borda-erro');
    	jQuery('#erro-comentario').text('');
    	jQuery('#erro-comentario').css('opacity','1');
    	jQuery('#erro-comentario').text('Senha menor que 6 dígitos');
		jQuery('input#confirme_nova_senha_rs').addClass('borda-erro');
		bloqueia = true;
    }else if(jQuery('input#confirme_nova_senha_rs').val() == ''){
    	jQuery('input#nova_senha_rs').removeClass('borda-erro');
    	jQuery('#erro-comentario').text('');
    	jQuery('#erro-comentario').css('opacity','1');
    	jQuery('#erro-comentario').text('Campo nova senha está vazio');
		jQuery('input#confirme_nova_senha_rs').addClass('borda-erro');
		bloqueia = true;
    }else if(jQuery('input#confirme_nova_senha_rs').val() != jQuery('input#nova_senha_rs').val()){
		jQuery('#erro-comentario').text('');
    jQuery('#erro-comentario').css('opacity','1');
		jQuery('#erro-comentario').text('As senhas não conferem');
		jQuery('input#nova_senha_rs').val('');
		jQuery('input#nova_senha_rs').addClass('borda-erro');
		jQuery('input#confirme_nova_senha_rs').val('');
		bloqueia = true;
    }else{
			var pass = jQuery("#confirme_nova_senha_rs").val();
				jQuery.ajax({
				type: 'get',
				data: 'email='+email+'&pass='+pass,
				url:'http://propagandarapida.com.br/alterar-senha-lost.php',
				success: function(retorno){
					jQuery('input#nova_senha_rs').val('');
					jQuery('input#nova_senha_rs').removeClass('borda-erro');
					jQuery('input#confirme_nova_senha_rs').val('');
					jQuery('input#confirme_nova_senha_rs').removeClass('borda-erro');
					jQuery('#sucesso-comentario').css('opacity','1');
					jQuery('#sucesso-comentario').css('display','block');
					jQuery('#sucesso-comentario').text(retorno);
					setTimeout(function(){window.location.href = "http://propagandarapida.com.br/login/?key=updatepass";},2000);
					//alert(retorno); 
				}
			})
		}
    setTimeout(function(){
      jQuery("#atualizar_nova_senha_rs .ajaxLoaderActive").prop("disabled", false);
      jQuery("#atualizar_nova_senha_rs").removeClass('ajaxLoaderActive');
      jQuery("#atualizar_nova_senha_rs").val("enviar");
      jQuery("#atualizar_nova_senha_rs").css("background", "#791144");
      jQuery("#atualizar_nova_senha_rs").css("cursor", "pointer");
      jQuery('#erro-comentario').css('opacity','0');
    }, 2000);
	if(bloqueia){
      return false; 
	}
});

/*
* Script 
* Página: Cadastrar
* 
*
*
*/

	jQuery('.register').on('submit',function(){
	var bloqueia = false;
	
	jQuery("#reg_billing_cpf").css("cssText", "border: 0 !important;");
	jQuery("#reg_billing_last_name").css("cssText", "border: 0 !important;");
	jQuery("#reg_billing_neighborhood").css("cssText", "border: 0 !important;");
	jQuery("#reg_billing_number").css("cssText", "border: 0 !important;");
		
    if (jQuery('#reg_billing_cpf').val().length <= 0){
        bloqueia = true;	
        jQuery("#reg_billing_cpf").css("cssText", "border: 1px solid #e45858 !important;");
    }

    if (jQuery('#reg_billing_last_name').val().length <= 0){
        bloqueia = true;	
        jQuery("#reg_billing_last_name").css("cssText", "border: 1px solid #e45858 !important;");
	}
	
	if (jQuery('#reg_billing_neighborhood').val().length <= 0){
        bloqueia = true;	
        jQuery("#reg_billing_neighborhood").css("cssText", "border: 1px solid #e45858 !important;");
	}
		
	if (jQuery('#reg_billing_number').val().length <= 0){
		bloqueia = true;	
		jQuery("#reg_billing_number").css("cssText", "border: 1px solid #e45858 !important;");
	}

	if(bloqueia){
		return false;	
	}
});

/*
* Script 
* Página: Treinamentos Abertos
* Bloco: 1
*
*
*/
if (window.XMLHttpRequest){
	xmlhttp = new XMLHttpRequest();
} else if (window.ActiveXObject){
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}else{
	alert ("Seu navegador não tem suporte para Ajax");
}
function mostrarOp(){
	jQuery('input#mes_treinamento').val('BUSCAR POR MÊS');
	var x = document.getElementById("opcoesMeses");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
}	
jQuery('body').click(function (event) {
	if(event.target.id!='mes_treinamento'){
		jQuery('div#opcoesMeses').hide();
	}
});
	jQuery("#todos").toggle(function() {
		jQuery('#mes_treinamento').val('');
		jQuery('#mes_treinamento').attr("placeholder", "TODOS");
		jQuery('.meses-treinamentos li svg').addClass('ativado');
		jQuery('#buscar-por-mes svg').removeClass('ativado');
		jQuery('#filtros-labels-meses span').text('');
		jQuery('#filtros-labels-meses span').text('Todos');
		jQuery('#meses_function').val('todos');
	}, function(){
		jQuery('#mes_treinamento').val('');
		jQuery('#mes_treinamento').attr("placeholder", "BUSCAR POR MÊS");
		jQuery('.meses-treinamentos li svg').removeClass('ativado');
		jQuery('#buscar-por-mes svg').removeClass('ativado');
		jQuery("#resposta_01").empty();
		jQuery("#resposta").empty();
		jQuery('#meses_function').val('');
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//function jan(){
	jQuery("#jan").toggle(function() {
		var jan = document.getElementById('jan').textContent;
		if(jQuery("input#mes_treinamento").val() == 'BUSCAR POR MÊS'){
		jQuery("input#mes_treinamento").val('');
		}
		document.getElementById('mes_treinamento').value += jan+' - ';
		jQuery('#filtros-labels-meses span').text(jQuery('#mes_treinamento').val());
		document.getElementById('mes_treinamento_number').value = '01';
		jQuery('#meses_function').val('1');
		//mesSelecionado();
		jQuery( "#jan svg" ).addClass( "ativado" );
	}, function(){
		var jan = document.getElementById('jan').textContent;
		var val = jQuery('#mes_treinamento').val();
		valreturn = val.replace('Janeiro  - ','');		
		jQuery('#mes_treinamento').val(valreturn);
		document.getElementById('mes_treinamento_number').value = "";
		jQuery( "#jan svg" ).removeClass("ativado");
		jQuery("#resposta_01").empty();
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//}

//function fev(){
	jQuery("#fev").toggle(function() {
		var fev = document.getElementById('fev').textContent;
		if(jQuery("input#mes_treinamento").val() == 'BUSCAR POR MÊS'){
		jQuery("input#mes_treinamento").val('');
		}
		document.getElementById('mes_treinamento').value += fev+' - ';
		jQuery('#filtros-labels-meses span').text(jQuery('#mes_treinamento').val());
		document.getElementById('mes_treinamento_number_02').value = '02';
		jQuery('#meses_function').val('2');
		//mesSelecionado_02();
		jQuery( "#fev svg" ).addClass( "ativado" );
	}, function(){
		var fev = document.getElementById('fev').textContent;
		var val = jQuery('#mes_treinamento').val();
		valreturn = val.replace('Fevereiro  - ','');	
		jQuery('#mes_treinamento').val(valreturn);
		document.getElementById('mes_treinamento_number_02').value = "";
		jQuery( "#fev svg" ).removeClass("ativado");
		jQuery("#resposta_02").empty();
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//}

//function mar(){
	jQuery("#mar").toggle(function() {
		var mar = document.getElementById('mar').textContent;
		if(jQuery("input#mes_treinamento").val() == 'BUSCAR POR MÊS'){
		jQuery("input#mes_treinamento").val('');
		}
		document.getElementById('mes_treinamento').value += mar+' - ';
		jQuery('#filtros-labels-meses span').text(jQuery('#mes_treinamento').val());
		document.getElementById('mes_treinamento_number_03').value = '03';
		jQuery('#meses_function').val('3');
		//mesSelecionado_03();
		jQuery( "#mar svg" ).addClass( "ativado" );
	}, function(){
		var mar = document.getElementById('mar').textContent;
		var val = jQuery('#mes_treinamento').val();
		valreturn = val.replace('Março  - ','');
		jQuery('#mes_treinamento').val(valreturn);		
		document.getElementById('mes_treinamento_number_03').value = "";
		jQuery( "#mar svg" ).removeClass("ativado");
		jQuery("#resposta_03").empty();
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//}

//function abr(){
	jQuery("#abr").toggle(function() {
		var abr = document.getElementById('abr').textContent;
		if(jQuery("input#mes_treinamento").val() == 'BUSCAR POR MÊS'){
		jQuery("input#mes_treinamento").val('');
		}
		document.getElementById('mes_treinamento').value += abr+' - ';
		jQuery('#filtros-labels-meses span').text(jQuery('#mes_treinamento').val());
		document.getElementById('mes_treinamento_number_04').value = '04';
		jQuery('#meses_function').val('4');
		//mesSelecionado_04();
		jQuery( "#abr svg" ).addClass( "ativado" );
	}, function(){
		var abr = document.getElementById('abr').textContent;
		var val = jQuery('#mes_treinamento').val();
		valreturn = val.replace('Abril  - ','');
		jQuery('#mes_treinamento').val(valreturn);			
		document.getElementById('mes_treinamento_number_04').value = "";
		jQuery( "#abr svg" ).removeClass("ativado");
		jQuery("#resposta_04").empty();
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//}

//function mai(){
	jQuery("#mai").toggle(function() {
		var mai = document.getElementById('mai').textContent;
		if(jQuery("input#mes_treinamento").val() == 'BUSCAR POR MÊS'){
		jQuery("input#mes_treinamento").val('');
		}
		document.getElementById('mes_treinamento').value += mai+' - ';
		jQuery('#filtros-labels-meses span').text(jQuery('#mes_treinamento').val());
		document.getElementById('mes_treinamento_number_05').value = '05';
		jQuery('#meses_function').val('5');
		//mesSelecionado_05();
		jQuery( "#mai svg" ).addClass( "ativado" );
	}, function(){
		var mai = document.getElementById('mai').textContent;
		var val = jQuery('#mes_treinamento').val();
		valreturn = val.replace('Maio  - ','');		
		jQuery('#mes_treinamento').val(valreturn);	
		document.getElementById('mes_treinamento_number_05').value = "";
		jQuery( "#mai svg" ).removeClass("ativado");
		jQuery("#resposta_05").empty();
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//}

//function jun(){
	jQuery("#jun").toggle(function() {
		var jun = document.getElementById('jun').textContent;
		if(jQuery("input#mes_treinamento").val() == 'BUSCAR POR MÊS'){
		jQuery("input#mes_treinamento").val('');
		}
		document.getElementById('mes_treinamento').value += jun+' - ';
		jQuery('#filtros-labels-meses span').text(jQuery('#mes_treinamento').val());
		document.getElementById('mes_treinamento_number_06').value = '06';
		jQuery('#meses_function').val('6');
		//mesSelecionado_06();
		jQuery( "#jun svg" ).addClass( "ativado" );
	}, function(){
		var jun = document.getElementById('jun').textContent;
		var val = jQuery('#mes_treinamento').val();
		valreturn = val.replace('Junho  - ','');
		jQuery('#mes_treinamento').val(valreturn);			
		document.getElementById('mes_treinamento_number_06').value = "";
		jQuery( "#jun svg" ).removeClass("ativado");
		jQuery("#resposta_06").empty();
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//}

//function jul(){
	jQuery("#jul").toggle(function() {
		var jul = document.getElementById('jul').textContent;
		if(jQuery("input#mes_treinamento").val() == 'BUSCAR POR MÊS'){
		jQuery("input#mes_treinamento").val('');
		}
		document.getElementById('mes_treinamento').value += jul+' - ';
		jQuery('#filtros-labels-meses span').text(jQuery('#mes_treinamento').val());
		document.getElementById('mes_treinamento_number_07').value = '07';
		jQuery('#meses_function').val('7');
		//mesSelecionado_07();
		jQuery( "#jul svg" ).addClass( "ativado" );
	}, function(){
		var jul = document.getElementById('jul').textContent;
		var val = jQuery('#mes_treinamento').val();
		valreturn = val.replace('Julho  - ','');
		jQuery('#mes_treinamento').val(valreturn);			
		document.getElementById('mes_treinamento_number_07').value = "";
		jQuery( "#jul svg" ).removeClass("ativado");
		jQuery("#resposta_07").empty();
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//}

//function ago(){
	jQuery("#ago").toggle(function() {
		var ago = document.getElementById('ago').textContent;
		if(jQuery("input#mes_treinamento").val() == 'BUSCAR POR MÊS'){
		jQuery("input#mes_treinamento").val('');
		}
		document.getElementById('mes_treinamento').value += ago+' - ';
		jQuery('#filtros-labels-meses span').text(jQuery('#mes_treinamento').val());
		document.getElementById('mes_treinamento_number_08').value = '08';
		jQuery('#meses_function').val('8');
		//mesSelecionado_08();
		jQuery( "#ago svg" ).addClass( "ativado" );
	}, function(){
		var ago = document.getElementById('ago').textContent;
		var val = jQuery('#mes_treinamento').val();
		valreturn = val.replace('Agosto  - ','');
		jQuery('#mes_treinamento').val(valreturn);			
		document.getElementById('mes_treinamento_number_08').value = "";
		jQuery( "#ago svg" ).removeClass("ativado");
		jQuery("#resposta_08").empty();
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//}

//function set(){
	jQuery("#set").toggle(function() {
		var set = document.getElementById('set').textContent;
		if(jQuery("input#mes_treinamento").val() == 'BUSCAR POR MÊS'){
		jQuery("input#mes_treinamento").val('');
		}
		document.getElementById('mes_treinamento').value += set+' - ';
		jQuery('#filtros-labels-meses span').text(jQuery('#mes_treinamento').val());
		document.getElementById('mes_treinamento_number_09').value = '09';
		jQuery('#meses_function').val('9');
		//mesSelecionado_09();
		jQuery( "#set svg" ).addClass( "ativado" );
	}, function(){
		var set = document.getElementById('set').textContent;
		var val = jQuery('#mes_treinamento').val();
		valreturn = val.replace('Setembro  - ','');
		jQuery('#mes_treinamento').val(valreturn);			
		document.getElementById('mes_treinamento_number_09').value = "";
		jQuery( "#set svg" ).removeClass("ativado");
		jQuery("#resposta_09").empty();
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//}

//function out(){
	jQuery("#out").toggle(function() {
		var out = document.getElementById('out').textContent;
		if(jQuery("input#mes_treinamento").val() == 'BUSCAR POR MÊS'){
		jQuery("input#mes_treinamento").val('');
		}
		document.getElementById('mes_treinamento').value += out+' - ';
		jQuery('#filtros-labels-meses span').text(jQuery('#mes_treinamento').val());
		document.getElementById('mes_treinamento_number_10').value = '10';
		jQuery('#meses_function').val('10');
		//mesSelecionado_10();
		jQuery( "#out svg" ).addClass( "ativado" );
	}, function(){
		var out = document.getElementById('out').textContent;
		var val = jQuery('#mes_treinamento').val();
		valreturn = val.replace('Outubro  - ','');
		jQuery('#mes_treinamento').val(valreturn);			
		document.getElementById('mes_treinamento_number_10').value = "";
		jQuery( "#out svg" ).removeClass("ativado");
		jQuery("#resposta_10").empty();
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//}

//function nov(){
	jQuery("#nov").toggle(function() {
		var nov = document.getElementById('nov').textContent;
		if(jQuery("input#mes_treinamento").val() == 'BUSCAR POR MÊS'){
		jQuery("input#mes_treinamento").val('');
		}
		document.getElementById('mes_treinamento').value += nov+' - ';
		jQuery('#filtros-labels-meses span').text(jQuery('#mes_treinamento').val());
		document.getElementById('mes_treinamento_number_11').value = '11';
		jQuery('#meses_function').val('11');
		//mesSelecionado_11();
		jQuery( "#nov svg" ).addClass( "ativado" );
	}, function(){
		var nov = document.getElementById('nov').textContent;
		var val = jQuery('#mes_treinamento').val();
		valreturn = val.replace('Novembro  - ','');
		jQuery('#mes_treinamento').val(valreturn);			
		document.getElementById('mes_treinamento_number_11').value = "";
		jQuery( "#nov svg" ).removeClass("ativado");
		jQuery("#resposta_11").empty();
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//}

// function dez(){
	jQuery("#dez").toggle(function() {
		var dez = document.getElementById('dez').textContent;
		if(jQuery("input#mes_treinamento").val() == 'BUSCAR POR MÊS'){
		jQuery("input#mes_treinamento").val('');
		}
		document.getElementById('mes_treinamento').value += dez+' - ';
		jQuery('#filtros-labels-meses span').text(jQuery('#mes_treinamento').val());
		document.getElementById('mes_treinamento_number_12').value = '12';
		jQuery('#meses_function').val('12');
		//mesSelecionado_12();
		jQuery( "#dez svg" ).addClass( "ativado" );
	}, function(){
		var dez = document.getElementById('dez').textContent;
		var val = jQuery('#mes_treinamento').val();
		valreturn = val.replace('Dezembro  - ','');
		jQuery('#mes_treinamento').val(valreturn);	
		document.getElementById('mes_treinamento_number_12').value = "";
		jQuery( "#dez svg" ).removeClass("ativado");
		jQuery("#resposta_12").empty();
		jQuery('#filtros-labels-meses span').text('nenhum filtro');
	});
//}
// novo script agora para evento no botão filtrar 14.12.2018
jQuery("div#aplicar-filtro button").click(function(){
			jQuery("#resposta_12").empty();
			jQuery("#resposta_11").empty();
			jQuery("#resposta_10").empty();
			jQuery("#resposta_09").empty();
			jQuery("#resposta_08").empty();
			jQuery("#resposta_07").empty();
			jQuery("#resposta_06").empty();
			jQuery("#resposta_05").empty();
			jQuery("#resposta_04").empty();
			jQuery("#resposta_03").empty();
			jQuery("#resposta_02").empty();
			jQuery("#resposta_01").empty();
			jQuery("#resposta").empty();
			jQuery("#resposta_tt").empty();
	jQuery(this).addClass("ajaxLoaderActive");
	var mesFunction = jQuery('#meses_function').val();
	if(mesFunction == 'todos'){
		todos();
	}else{
		mesSelecionado();
	}
});


/*
* Script 
* Página: Treinamentos Abertos
* Blodo: 2
*
*
*/

if (window.XMLHttpRequest){
	xmlhttp = new XMLHttpRequest();
} else if (window.ActiveXObject){
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}else{
	alert ("Seu navegador não tem suporte para Ajax");
}


jQuery('#nome').keypress(function(e) {
    if(e.which == 13) {
        Enviar();
    }
});
function Enviar(){
			jQuery('#filtros-labels-string span').text('');
			if(jQuery('input#nome').val() == ''){
				jQuery('#input-keywords-key').css('border','1px solid red');
			}else{
			jQuery('#input-keywords-key').css('border','0px solid red');
			var jan = document.getElementById('mes_treinamento_number').value;
			var fev = document.getElementById('mes_treinamento_number_02').value;
			var mar = document.getElementById('mes_treinamento_number_03').value;
			var abr = document.getElementById('mes_treinamento_number_04').value;
			var mai = document.getElementById('mes_treinamento_number_05').value;
			var jun = document.getElementById('mes_treinamento_number_06').value;
			var jul = document.getElementById('mes_treinamento_number_07').value;
			var ago = document.getElementById('mes_treinamento_number_08').value;
			var set = document.getElementById('mes_treinamento_number_09').value;
			var out = document.getElementById('mes_treinamento_number_10').value;
			var nov = document.getElementById('mes_treinamento_number_11').value;
			var dez = document.getElementById('mes_treinamento_number_12').value;
			var valor_nome = document.getElementById('nome').value;
			jQuery('#filtros-labels-string span').text(valor_nome);
			if(valor_nome == ''){
				valor_nome = 'a';
			}
			var mes = document.getElementById('meses_function').value;
			var tag = document.getElementById('tag_post').value;
			jQuery("#resposta_12").empty();
			jQuery("#resposta_11").empty();
			jQuery("#resposta_10").empty();
			jQuery("#resposta_09").empty();
			jQuery("#resposta_08").empty();
			jQuery("#resposta_07").empty();
			jQuery("#resposta_06").empty();
			jQuery("#resposta_05").empty();
			jQuery("#resposta_04").empty();
			jQuery("#resposta_03").empty();
			jQuery("#resposta_02").empty();
			jQuery("#resposta_01").empty();
			jQuery("#resposta").empty();
			jQuery("#resposta_tt").empty();
			xmlhttp.open('GET','http://propagandarapida.com.br/receber.php?nome='+valor_nome+'&tag='+tag+'&jan='+jan+'&fev='+fev+'&mar='+mar+'&abr='+abr+'&mai='+mai+'&jun='+jun+'&jul='+jul+'&ago='+ago+'&set='+set+'&out='+out+'&nov='+nov+'&dez='+dez,true);
			xmlhttp.send();	
		document.getElementById('reload').style.display = "block";
		xmlhttp.onreadystatechange = function() {

			if (xmlhttp.readyState == 4){
				console.log('Iniciando conexão para status 200');
				document.getElementById('reload').style.display = "none";
				if (xmlhttp.status == 200){
						jQuery("#resposta_tt").empty();
						jQuery("#resposta").empty();
						document.getElementById('resposta').innerHTML = xmlhttp.responseText;
						
				} else {
						console.log('Houve um erro, e não foi possivel obter a resposta');
				}
			}else {
				console.log('Nao foi possivel iniciar conexão para status 200');
			}
		}
	}
}
function mesSelecionado(){
		var jan = document.getElementById('mes_treinamento_number').value;
		var fev = document.getElementById('mes_treinamento_number_02').value;
		var mar = document.getElementById('mes_treinamento_number_03').value;
		var abr = document.getElementById('mes_treinamento_number_04').value;
		var mai = document.getElementById('mes_treinamento_number_05').value;
		var jun = document.getElementById('mes_treinamento_number_06').value;
		var jul = document.getElementById('mes_treinamento_number_07').value;
		var ago = document.getElementById('mes_treinamento_number_08').value;
		var set = document.getElementById('mes_treinamento_number_09').value;
		var out = document.getElementById('mes_treinamento_number_10').value;
		var nov = document.getElementById('mes_treinamento_number_11').value;
		var dez = document.getElementById('mes_treinamento_number_12').value;
		var valor_nome = document.getElementById('nome').value;
		if(valor_nome == ''){
			valor_nome = 'a';
		}
		var tag = document.getElementById('tag_post').value;
			xmlhttp.open('GET','http://propagandarapida.com.br/receber.php?nome='+valor_nome+'&tag='+tag+'&jan='+jan+'&fev='+fev+'&mar='+mar+'&abr='+abr+'&mai='+mai+'&jun='+jun+'&jul='+jul+'&ago='+ago+'&set='+set+'&out='+out+'&nov='+nov+'&dez='+dez,true);
			xmlhttp.send();	
		document.getElementById('reload').style.display = "block";
		xmlhttp.onreadystatechange = function() {

			if (xmlhttp.readyState == 4){
				console.log('Iniciando conexão para status 200');
				document.getElementById('reload').style.display = "none";
				if (xmlhttp.status == 200){
						jQuery("#resposta_tt").empty();
						jQuery("#resposta").empty();
						jQuery('div#aplicar-filtro button').removeClass("ajaxLoaderActive");
						document.getElementById('resposta').innerHTML = xmlhttp.responseText;
				} else {
						console.log('Houve um erro, e não foi possivel obter a resposta');
				}
			}else {
				console.log('Nao foi possivel iniciar conexão para status 200');
			}
		}
	
}

function tagSelecionado(){
			jQuery('#filtros-labels-tema span').text('nenhum filtro');
			var jan = document.getElementById('mes_treinamento_number').value;
			var fev = document.getElementById('mes_treinamento_number_02').value;
			var mar = document.getElementById('mes_treinamento_number_03').value;
			var abr = document.getElementById('mes_treinamento_number_04').value;
			var mai = document.getElementById('mes_treinamento_number_05').value;
			var jun = document.getElementById('mes_treinamento_number_06').value;
			var jul = document.getElementById('mes_treinamento_number_07').value;
			var ago = document.getElementById('mes_treinamento_number_08').value;
			var set = document.getElementById('mes_treinamento_number_09').value;
			var out = document.getElementById('mes_treinamento_number_10').value;
			var nov = document.getElementById('mes_treinamento_number_11').value;
			var dez = document.getElementById('mes_treinamento_number_12').value;
			var tag = document.getElementById('tag_post').value;
			if(tag){
				jQuery('#filtros-labels-tema span').text(tag);
			}else{
				jQuery('#filtros-labels-tema span').text('todos');
			}
			var valor_nome = document.getElementById('nome').value;
			if(valor_nome == ''){
				valor_nome = 'a';
			}
			jQuery("#resposta_12").empty();
			jQuery("#resposta_11").empty();
			jQuery("#resposta_10").empty();
			jQuery("#resposta_09").empty();
			jQuery("#resposta_08").empty();
			jQuery("#resposta_07").empty();
			jQuery("#resposta_06").empty();
			jQuery("#resposta_05").empty();
			jQuery("#resposta_04").empty();
			jQuery("#resposta_03").empty();
			jQuery("#resposta_02").empty();
			jQuery("#resposta_01").empty();
			xmlhttp.open('GET','http://propagandarapida.com.br/receber.php?nome='+valor_nome+'&tag='+tag+'&jan='+jan+'&fev='+fev+'&mar='+mar+'&abr='+abr+'&mai='+mai+'&jun='+jun+'&jul='+jul+'&ago='+ago+'&set='+set+'&out='+out+'&nov='+nov+'&dez='+dez,true);
			xmlhttp.send();	
			document.getElementById('reload').style.display = "block";
		xmlhttp.onreadystatechange = function() {

			if (xmlhttp.readyState == 4){
				console.log('Iniciando conexão para status 200');
				document.getElementById('reload').style.display = "none";
				if (xmlhttp.status == 200){
						jQuery("#resposta_tt").empty();
						jQuery("#resposta").empty();
						document.getElementById('resposta').innerHTML = xmlhttp.responseText;
				} else {
						console.log('Houve um erro, e não foi possivel obter a resposta');
				}
			}else {
				console.log('Nao foi possivel iniciar conexão para status 200');
			}
		}
}
	var url = window.location.pathname;
	if(url == "/servicos/treinamentos/abertos-2/"){
	function EnviarTotal(){
			jQuery('#filtros-labels-meses span').text('nenhum filtro');
			jQuery('#filtros-labels-tema span').text('nenhum filtro');
			jQuery('#filtros-labels-string span').text('nenhum filtro');
			var valor_nome = document.getElementById('nome').value;
			var mes = document.getElementById('meses_function').value;
			var tag = document.getElementById('tag_post').value;
			jQuery('#opcoesMesesIntervalo').css('display' , 'none');
			//jQuery('#opcoesMeses').css('display' , 'none');
			xmlhttp.open('GET','http://propagandarapida.com.br/receber-total.php',true);
			xmlhttp.send();	
			document.getElementById('reload').style.display = "block";
						jQuery("#resposta").empty();
						jQuery("#resposta_02").empty();
						jQuery("#resposta_03").empty();
						jQuery("#resposta_04").empty();
						jQuery("#resposta_05").empty(); 
						jQuery("#resposta_06").empty(); 
						jQuery("#resposta_07").empty(); 
						jQuery("#resposta_08").empty(); 
						jQuery("#resposta_09").empty(); 
						jQuery("#resposta_10").empty(); 
						jQuery("#resposta_11").empty(); 
						jQuery("#resposta_12").empty();
						
		xmlhttp.onreadystatechange = function() {

			if (xmlhttp.readyState == 4){
				console.log('Iniciando conexão para status 200');
				document.getElementById('reload').style.display = "none";
				if (xmlhttp.status == 200){
						jQuery('.meses-treinamentos li svg').removeClass('ativado');
						document.getElementById('resposta_tt').innerHTML = xmlhttp.responseText;
						
						
				} else {
						console.log('Houve um erro, e não foi possivel obter a resposta');
				}
			}else {
				console.log('Nao foi possivel iniciar conexão para status 200');
			}
		}
}
}
	
	function EnviarTotalTodos(){
			jQuery('#filtros-labels-meses span').text('nenhum filtro');
			jQuery('#filtros-labels-tema span').text('nenhum filtro');
			jQuery('#filtros-labels-string span').text('nenhum filtro');
			var valor_nome = document.getElementById('nome').value;
			var mes = document.getElementById('meses_function').value;
			var tag = document.getElementById('tag_post').value;
			jQuery('#opcoesMesesIntervalo').css('display' , 'none');
			//jQuery('#opcoesMeses').css('display' , 'none');
			xmlhttp.open('GET','http://propagandarapida.com.br/receber-total.php',true);
			xmlhttp.send();	
			document.getElementById('reload').style.display = "block";
						jQuery("#resposta").empty();
						jQuery("#resposta_02").empty();
						jQuery("#resposta_03").empty();
						jQuery("#resposta_04").empty();
						jQuery("#resposta_05").empty(); 
						jQuery("#resposta_06").empty(); 
						jQuery("#resposta_07").empty(); 
						jQuery("#resposta_08").empty(); 
						jQuery("#resposta_09").empty(); 
						jQuery("#resposta_10").empty(); 
						jQuery("#resposta_11").empty(); 
						jQuery("#resposta_12").empty();
		xmlhttp.onreadystatechange = function() {

			if (xmlhttp.readyState == 4){
				console.log('Iniciando conexão para status 200');
				document.getElementById('reload').style.display = "none";
				if (xmlhttp.status == 200){
						document.getElementById('resposta_tt').innerHTML = xmlhttp.responseText;
						jQuery('div#aplicar-filtro button').removeClass("ajaxLoaderActive");
						
				} else {
						console.log('Houve um erro, e não foi possivel obter a resposta');
				}
			}else {
				console.log('Nao foi possivel iniciar conexão para status 200');
			}
		}
}
function buscarPorMes(){
	jQuery('#mes_treinamento').val('');
	jQuery('#mes_treinamento').attr("placeholder", "BUSCAR POR MÊS");
	jQuery('.meses-treinamentos li svg').removeClass('ativado');
	jQuery('#buscar-por-mes svg').addClass('ativado');
	EnviarTotal();
}
function todos(){
	jQuery('#filtros-labels-tema span').val('todos');
	EnviarTotalTodos();
}
jQuery('div#limpar-filtro').click(function(){
	EnviarTotal();
	jQuery('#mes_treinamento_number').val('');
	jQuery('#mes_treinamento_number_02').val('');
	jQuery('#mes_treinamento_number_03').val('');
	jQuery('#mes_treinamento_number_04').val('');
	jQuery('#mes_treinamento_number_05').val('');
	jQuery('#mes_treinamento_number_06').val('');
	jQuery('#mes_treinamento_number_07').val('');
	jQuery('#mes_treinamento_number_08').val('');
	jQuery('#mes_treinamento_number_09').val('');
	jQuery('#mes_treinamento_number_10').val('');
	jQuery('#mes_treinamento_number_11').val('');
	jQuery('#mes_treinamento_number_12').val('');
	jQuery("#resposta").empty();
	jQuery("#resposta_02").empty();
	jQuery("#resposta_03").empty();
	jQuery("#resposta_04").empty();
	jQuery("#resposta_05").empty(); 
	jQuery("#resposta_06").empty(); 
	jQuery("#resposta_07").empty(); 
	jQuery("#resposta_08").empty(); 
	jQuery("#resposta_09").empty(); 
	jQuery("#resposta_10").empty(); 
	jQuery("#resposta_11").empty(); 
	jQuery("#resposta_12").empty();
});
jQuery(window).load(function() {
	var url_tt = window.location.pathname;
	if(url_tt == "/servicos/treinamentos/abertos-2/"){
		EnviarTotal();
}
});
	
jQuery('#pg-1378-2').click(function() {
	jQuery('#opcoesMeses').css('display','none');
});
jQuery('#pg-1378-3').click(function() {
	jQuery('#opcoesMeses').css('display','none');
});	

/*
* Script 
* Página: Finalizar Compra
* 
*
*
*/


	function bloco_dados_contato() {
    var x = document.getElementById("bloco_dados_contato1");
    if (x.style.display === "none") {
        x.style.display = "block";
            document.getElementById('img-fechado2').classList.add("rotacionar");
        document.getElementById('meus-dados-cadastrais').style.background = "#791144";

    } else {
        x.style.display = "none";
        document.getElementById('meus-dados-cadastrais').style.background = "#bfbebe";
            document.getElementById('img-fechado2').classList.remove("rotacionar");
    }


    var y = document.getElementById("bloco_dados_contato2");
    if (y.style.display === "none") {
        y.style.display = "block";
        document.getElementById('meus-dados-cadastrais').style.background = "#791144";

    } else {
        y.style.display = "none";
        document.getElementById('meus-dados-cadastrais').style.background = "#bfbebe";
    }
}
jQuery(document).ready(function(){
		jQuery("input#cep_new_end_input").mask('99999-999');
		jQuery('.cards_endereco').removeClass('ajaxLoaderActive');
		jQuery(".cards_endereco").click(function(){
		token = jQuery(this).attr('token');
		jQuery('.cards_endereco').removeClass('ativar_endereco');
		jQuery(this).addClass('ativar_endereco');
		jQuery(this).addClass('ajaxLoaderActive');
		var cod = jQuery(this).attr('cod');
		//token += parseInt(token+1);
		token_select = parseInt(token)+1;
		if(token != 'default' || cod == 'padrao'){
			jQuery('#ship-to-different-address-checkbox').prop("checked", true);
			jQuery('.col-1 select#billing_alt option[value='+token_select+']').attr('selected','selected');
			jQuery('.col-2 select#shipping_alt option[value='+token_select+']').attr('selected','selected');
			/* alterando os campos do endereco de entrega */
			fn = jQuery('#shipping_address_'+token+' input#shipping_first_name').val();
			ln = jQuery('#shipping_address_'+token+' input#shipping_last_name').val();
			cp__ = jQuery('#shipping_address_'+token+' input#shipping_postcode').val();
			rua__ = jQuery('#shipping_address_'+token+' input#shipping_address_'+token).val();
			nb__ = jQuery('#shipping_address_'+token+' input#shipping_number').val();
			brr__ = jQuery('#shipping_address_'+token+' input#shipping_neighborhood').val();
			ct__ = jQuery('#shipping_address_'+token+' input#shipping_city').val();
			st__ = jQuery('#shipping_address_'+token+' #shipping_state').val();
			
			jQuery(".shipping_address input#shipping_postcode").val(cp__);
			jQuery(".shipping_address input#shipping_address_1").val(rua__);
			jQuery(".shipping_address input#shipping_number").val(nb__);
			jQuery(".shipping_address input#shipping_neighborhood").val(brr__);
			jQuery(".shipping_address input#shipping_city").val(ct__);
						
			cp = jQuery("#cep_address_"+token).text();
			en = jQuery("#ender_"+token).text();
			nu = jQuery("#number_"+token).text();
			br = jQuery("#bairro_address_"+token).text();
			ct = jQuery("#cidade_address_"+token).text();
			// adiciona CEP no campo de shipping shortcode
			jQuery("section.shipping-calculator-form-shortcode input#calc_shipping_postcode").val(cp);
			jQuery(".shipping_address input#shipping_postcode").val(cp);
			jQuery(".shipping_address input#shipping_address_1").val(en);
			jQuery(".shipping_address input#shipping_number").val(nu);
			jQuery(".shipping_address input#shipping_neighborhood").val(br);
			jQuery(".shipping_address input#shipping_city").val(ct);
			jQuery(".col-2 div#bloco_dados_contato2 .shipping_address input#shipping_first_name").val(fn);
			jQuery(".col-2 div#bloco_dados_contato2 .shipping_address input#shipping_last_name").val(ln);
			// clica no botao de frete para calcular o frete
			setTimeout(function(){
				jQuery('.shipping-calculator-form-shortcode button.button.ss-woo-shipping-calculator').trigger('click');
				setInterval(function(){
					if(jQuery('div#ss-woo-shipping-result ul').length > 0){
						setTimeout(function(){
							window.location.href = "http://propagandarapida.com.br/finalizar-compra/?token="+token+'#meus-dados-cadastrais';
						},2500)
					}
				},6000);
			},500);
		}else{
			jQuery('input#ship-to-different-address-checkbox').prop("checked", false);
			jQuery('#card_endereco_padrao').addClass('ativar_endereco');
			//jQuery('.col-1 select#billing_alt option[value=0').attr('selected','selected');
			//jQuery('.col-2 select#shipping_alt option[value=0').attr('selected','selected');
		}
	});
});
jQuery("div#abrirOpPagamento").click(function(){
	jQuery("#reload_checkout").remove();
	var content_button = '<div id="reload_checkout_div"></div>';
	jQuery(content_button).insertAfter(".form-row.place-order input#place_order");
	//jQuery('.form-row.place-order input#place_order').hide();
	var tagfecha = '</';
	var createjs = '<script>jQuery(".form-row.place-order input#place_order").click(function(){ jQuery(this).addClass("ajaxLoaderActive"); var bloqueia = false; if(jQuery("div#pagseguro-credit-card-form").css("display") == "block"){ if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-name-field input").val() == ""){ jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-name-field input").addClass("borda-erro"); bloqueia = true; } if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-number-field input").val() == ""){ jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-number-field input").addClass("borda-erro"); bloqueia = true; } if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-expiry-field input").val() == ""){ jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-expiry-field input").addClass("borda-erro"); bloqueia = true; } if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-cvc-field input").val() == ""){ jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-cvc-field input").addClass("borda-erro"); bloqueia = true; } if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-installments-field select#pagseguro-card-installments").val() == ""){ jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-installments-field select#pagseguro-card-installments").addClass("borda-erro"); bloqueia = true; } if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-cpf-field input").val() == ""){ jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-cpf-field input").addClass("borda-erro"); bloqueia = true; } if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-birth-date-field input").val() == ""){ jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-birth-date-field input").addClass("borda-erro"); bloqueia = true; } if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-phone-field input").val() == ""){ jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-phone-field input").addClass("borda-erro"); bloqueia = true; } setTimeout(function(){ jQuery(".form-row.place-order input#place_order").removeClass("ajaxLoaderActive"); jQuery("#pagseguro-payment-form input").removeClass("borda-erro"); },8000); } if(bloqueia){ return false; } });'+tagfecha+'script>';
	jQuery("#reload_checkout_div").append(createjs);
});
/*
jQuery("#reload_checkout").click(function(){ 
		jQuery(this).addClass('ajaxLoaderActive');
		var bloqueia = false;
		if(jQuery("div#pagseguro-credit-card-form").css('display') == 'block'){
		if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-name-field input").val() == ''){
			jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-name-field input").addClass('borda-erro');
			bloqueia = true;
		}
        if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-number-field input").val() == ''){
			jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-number-field input").addClass('borda-erro');
			bloqueia = true;
		}
        if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-expiry-field input").val() == ''){
			jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-expiry-field input").addClass('borda-erro');
			bloqueia = true;
		}
        if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-cvc-field input").val() == ''){
			jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-cvc-field input").addClass('borda-erro');
			bloqueia = true;
		}
        if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-installments-field select#pagseguro-card-installments").val() == ''){
			jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-installments-field select#pagseguro-card-installments").addClass('borda-erro');
			bloqueia = true;
		}
        if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-cpf-field input").val() == ''){
			jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-cpf-field input").addClass('borda-erro');
			bloqueia = true;
		}
        if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-birth-date-field input").val() == ''){
			jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-birth-date-field input").addClass('borda-erro');
			bloqueia = true;
		}
        if(jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-phone-field input").val() == ''){
			jQuery("#pagseguro-payment-form div#pagseguro-credit-card-form #pagseguro-card-holder-phone-field input").addClass('borda-erro');
			bloqueia = true;
		}
    }
		setTimeout(function(){ 
			jQuery("#reload_checkout").removeClass('ajaxLoaderActive'); 
			jQuery("#pagseguro-payment-form input").removeClass('borda-erro');
		},7000); 
		if(bloqueia){
			return false; 
		}
});*/

/*
* Script 
* Página: Finalizar Compra
* Fun~ção: Novos Endereços
*
*
*/

jQuery("button#salvar_novo_endereco_checkout").click(function(){
	setTimeout(function(){
	      	jQuery("button#salvar_novo_endereco_checkout").css("color","transparent");
	    		jQuery("button#salvar_novo_endereco_checkout").css("background", "#673f53");  
	      	jQuery("button#salvar_novo_endereco_checkout").addClass("ajaxLoaderActive");
	      	jQuery("button#salvar_novo_endereco_checkout .ajaxLoaderActive").prop("disabled", true);
	      	jQuery("button#salvar_novo_endereco_checkout").css("cursor", "no-drop");
	    }, 100);
	if(jQuery('input[name="nome_destinatario"]').val() == '' || jQuery('input[name="nome_destinatario"]').val().indexOf(" ") <= 0){
	    jQuery('input[name="nome_destinatario"]').addClass('borda-erro');
		jQuery('input[name="nome_destinatario"]').val('');
		jQuery('input[name="nome_destinatario"]').attr("placeholder","É preciso informar o nome completo.");
	}else {
		jQuery('input[name="nome_destinatario"]').removeClass('borda-erro');
	}
	if(jQuery('input[name="nome_endereco"]').val() == ''){
	    jQuery('input[name="nome_endereco"]').addClass('borda-erro');
	}else {
		jQuery('input[name="nome_endereco"]').removeClass('borda-erro');
	}
	if(jQuery('input#cep_new_end_input').val() == ''){
	    jQuery('input#cep_new_end_input').addClass('borda-erro');
	}else {
		jQuery('input#cep_new_end_input').removeClass('borda-erro');
	}
	if(jQuery('input#end_new_end_input').val() == ''){
	    jQuery('input#end_new_end_input').addClass('borda-erro');
	}else {
		jQuery('input#end_new_end_input').removeClass('borda-erro');
	}
	if(jQuery('input#number_new_end_input').val() == ''){
	    jQuery('input#number_new_end_input').addClass('borda-erro');
	}else {
		jQuery('input#number_new_end_input').removeClass('borda-erro');
	}
	if(jQuery('input#bairro_new_end_input').val() == ''){
	    jQuery('input#bairro_new_end_input').addClass('borda-erro');
	}else {
		jQuery('input#bairro_new_end_input').removeClass('borda-erro');
	}
	if(jQuery('input#cidade_new_end_input').val() == ''){
	    jQuery('input#cidade_new_end_input').addClass('borda-erro');
	}else {
		jQuery('input#cidade_new_end_input').removeClass('borda-erro');
	}
	if(jQuery('select#estado_new_end_input').val() == 'Estado'){
	    jQuery('select#estado_new_end_input').addClass('borda-erro');
	}else {
		jQuery('select#estado_new_end_input').removeClass('borda-erro');
	}
	if(jQuery('input[name="nome_destinatario"]').val() != '' && jQuery('input[name="nome_destinatario"]').val().indexOf(" ") > 0  && jQuery('input[name="nome_endereco"]').val() != '' && jQuery('input#cep_new_end_input').val() != '' && jQuery('input#end_new_end_input').val() != '' && jQuery('input#number_new_end_input').val() != '' && jQuery('input#bairro_new_end_input').val() != '' && jQuery('input#cidade_new_end_input').val() != '' && jQuery('select#estado_new_end_input').val() != ''){
		billing_1 = jQuery(".rua_correta input").val();
		if(billing_1 != undefined){
			jQuery("div#bloco_dados_contato1 .woocommerce-billing-fields__field-wrapper p#billing_address_1_field input#billing_address_1").val(billing_1);
			jQuery("input#shipping_number").val()
		}
	// criando as referencias para criar a div de endereço
	var $r = jQuery('#rua_');
    var $b = jQuery('#bairro_');
	var $c = jQuery('#cidade_');
    var $e = jQuery('#estado_');
	var $cep = jQuery('#cep_');
	// pegando os valores dos inputs
	var rua_ = jQuery('#billing_address_1').val();
	var number = jQuery('input#billing_number').val();
    var bairro_ = jQuery('#billing_address_2').val();
	var cidade_ = jQuery('#billing_city').val();
    var estado_ = jQuery('#billing_state').val();
	var cep_ = jQuery('#billing_postcode').val();
	jQuery("input#shipping_number").val(number);
		jQuery("a.add_address").trigger("click");
		var resultArray = [];
        jQuery('.shipping_address.address_block').each(function(){
            resultArray.push(jQuery(this).text());
            if (jQuery(this).attr('id') == undefined){
                jQuery(this).addClass('new');
            }
        });
		var nome = jQuery('input[name="nome_destinatario"]').val();
		var sobrenome = nome.split(" ");
		var sobrenome_c = '';
		for(var i = 1; sobrenome.length > i; i++){
				sobrenome_c += sobrenome[i]+' ';
		}
		var label = jQuery('input[name="nome_endereco"]').val();
		var cep = jQuery('input#cep_new_end_input').val();
		var rua = jQuery('input#end_new_end_input').val();
		var numero = jQuery('input#number_new_end_input').val();
		var bairro = jQuery('input#bairro_new_end_input').val();
		var cidade = jQuery('input#cidade_new_end_input').val();
		var estado = jQuery('select#estado_new_end_input').val();
		if(jQuery(".shipping_address.address_block.new input[name='label[]']").val() == ''){
			jQuery(".shipping_address.address_block.new input[name='label[]']").val(label);
		}
		if(jQuery(".shipping_address.address_block.new input[name='shipping_first_name[]']").val() == ''){
			jQuery(".shipping_address.address_block.new input[name='shipping_first_name[]']").val(sobrenome[0]);
		}
		if(jQuery(".shipping_address.address_block.new input[name='shipping_last_name[]']").val() == ''){
			jQuery(".shipping_address.address_block.new input[name='shipping_last_name[]']").val(sobrenome_c);
		}
		if(jQuery(".shipping_address.address_block.new select#shipping_country").val() == ''){
			jQuery(".shipping_address.address_block.new select[name='shipping_country[]']").val('BR');
		}
		if(jQuery(".shipping_address.address_block.new input[name='shipping_postcode[]']").val() == ''){
			jQuery(".shipping_address.address_block.new input[name='shipping_postcode[]']").val(cep);
		}
		if(jQuery(".shipping_address.address_block.new input[name='shipping_address_1[]']").val() == ''){
			jQuery(".shipping_address.address_block.new input[name='shipping_address_1[]']").val(rua);
		}
		if(jQuery(".shipping_address.address_block.new input[name='shipping_number[]']").val() == ''){
			jQuery(".shipping_address.address_block.new input[name='shipping_number[]']").val(numero);
		}
		if(jQuery(".shipping_address.address_block.new input[name='shipping_neighborhood[]']").val() == ''){
			jQuery(".shipping_address.address_block.new input[name='shipping_neighborhood[]']").val(bairro);
		}
		if(jQuery(".shipping_address.address_block.new input[name='shipping_city[]']").val() == ''){
			jQuery(".shipping_address.address_block.new input[name='shipping_city[]']").val(cidade);
		}
		if(jQuery(".shipping_address.address_block.new input#shipping_state").val() == ''){
			jQuery(".shipping_address.address_block.new input#shipping_state").val(estado_);
		}
		if(jQuery(".shipping_address.address_block.new select#shipping_state").val() == ''){
			jQuery(".shipping_address.address_block.new select#shipping_state option").filter(function() {
					return jQuery(this).text() == estado;
			}).prop("selected", true);
		}
		// se os campos de entrega estiverem vazios tambem serão preenchidos.
		if(jQuery(".col-2 .shipping_address input[name='label[]']").val() == ''){
			jQuery(".col-2 .shipping_address input[name='label[]']").val(label);
		}
		if(jQuery(".col-2 .shipping_address input#shipping_first_name").val() == ''){
			jQuery(".col-2 .shipping_address input#shipping_first_name").val(sobrenome[0]);
		}
		if(jQuery(".col-2 .shipping_address input#shipping_last_name").val() == ''){
			jQuery(".col-2 .shipping_address input#shipping_last_name").val(sobrenome_c);
		}
		if(jQuery(".col-2 .shipping_address select#shipping_country").val() == ''){
			jQuery(".col-2 .shipping_address select[name='shipping_country[]']").val('BR');
		}
		if(jQuery(".col-2 .shipping_address input#shipping_postcode").val() == ''){
			jQuery(".col-2 .shipping_address input#shipping_postcode").val(cep);
		}
		if(jQuery(".col-2 .shipping_address input#shipping_address_1").val() == ''){
			jQuery(".col-2 .shipping_address input#shipping_address_1").val(rua);
		}
		if(jQuery(".col-2 .shipping_address input#shipping_number").val() == ''){
			jQuery(".col-2 .shipping_address input#shipping_number").val(numero);
		}
		if(jQuery(".col-2 .shipping_address input#shipping_neighborhood").val() == ''){
			jQuery(".col-2 .shipping_address input#shipping_neighborhood").val(bairro);
		}
		if(jQuery(".col-2 .shipping_address input#shipping_city").val() == ''){
			jQuery(".col-2 .shipping_address input#shipping_city").val(cidade);
		}
		if(jQuery(".col-2 .shipping_address input#shipping_state").val() == ''){
			jQuery(".col-2 .shipping_address input#shipping_state").val(estado);
		}
	}
	setTimeout(function(){
		  if(jQuery('input[name="nome_destinatario"]').val() != '' && jQuery('input[name="nome_destinatario"]').val().indexOf(" ") > 0){
				jQuery("input[name='set_addresses']").trigger('click');
		  }
	    },4000);
});
jQuery("span.fechar-modal").click(function(){
	jQuery("div#modal_adicionar_novo_endereco").css("opacity","0");
	jQuery("div#modal_adicionar_novo_endereco").css("visibility","hidden");
});
jQuery("div#adicionar_novo").click(function(){
	jQuery("div#modal_adicionar_novo_endereco").css("opacity","1");
	jQuery("div#modal_adicionar_novo_endereco").css("visibility","visible");
	var rua_0 = jQuery('#billing_address_1').val();
	var number_0 = jQuery('input#billing_number').val();
  var bairro_0 = jQuery('#billing_neighborhood').val();
	var cidade_0 = jQuery('#billing_city').val();
  var estado_0 = jQuery('#billing_state').val();
	var cep_0 = jQuery('#billing_postcode').val();
	var firstname = jQuery('div#bloco_dados_contato1 input#billing_first_name').val();
	var lastname = jQuery('div#bloco_dados_contato1 input#billing_last_name').val();
	jQuery('#shipping_address_0 input#shipping_first_name').val(firstname);
	jQuery('#shipping_address_0 input#shipping_last_name').val(lastname);
	jQuery('div#shipping_address_0 input#label').val('label0');
	jQuery('div#shipping_address_0 select#shipping_country').val('BR');
	jQuery('div#shipping_address_0 input#shipping_postcode').val(cep_0);
	jQuery('div#shipping_address_0 input#shipping_address_1').val(rua_0);
	jQuery('div#shipping_address_0 input#shipping_number').val(number_0);
	jQuery('div#shipping_address_0 input#shipping_neighborhood').val(bairro_0);
	jQuery('div#shipping_address_0 input#shipping_city').val(cidade_0);
	jQuery('div#shipping_address_0 #shipping_state').val(estado_0);
	jQuery('#bloco_dados_contato1 .woocommerce-billing-fields__field-wrapper select#billing_country').val('BR');
	jQuery('.col-2 .shipping_address select#shipping_country').val('BR');
});
// criando formato de redirecionamento para página minha conta editar
jQuery(window).on("load", function(){
	var url_string = window.location.pathname; //window.location.href
	if(url_string == '/finalizar-compra/'){
		jQuery("li.top-account-2 a").attr('href', 'http://propagandarapida.com.br/painel-minha-conta/editar/?st=redirect_default');
	
		setTimeout(function(){
			jQuery('.col-1 select#billing_alt option[value=1]').attr('selected','selected');
			jQuery('.col-2 select#shipping_alt option[value=1]').attr('selected','selected');
		},3000)
	}
})

// quando clicado em selecionar tema na pagina treinamentos esconder se aberto a opção de meses
jQuery("select#tag_post").click(function(){
	jQuery("div#opcoesMeses").css('display','none');
});

jQuery(".tema_palavra_chave input#nome").click(function(){
	jQuery("div#opcoesMeses").css('display','none');
});

jQuery(".page-id-1378 div#pg-1378-2").click(function(){
	jQuery("div#opcoesMeses").css('display','none');
});

// função para exibir o submenu quando o mouse estiver sobre ele
jQuery("ul.sub-menu").mouseover(function(){
	jQuery(this).addClass('forcaShow');
});
// função para ocultar o submenu quando o mouse sair dele
jQuery("ul.sub-menu").mouseout(function(){
	jQuery(this).removeClass('forcaShow');
});

// Programação referente etapa Checkout para finalizarmos - 08.11.2018
// ja vir aberto a opção de pagamento
	var url_string = window.location.pathname; //window.location.href
	if(url_string == '/finalizar-compra/'){
			jQuery(window).on("load", function(){
				abrirPayment();
				abrirPayment();
			});
	}
jQuery("button#realizar-pagamento").click(function(){
	jQuery("div#payment input#place_order").trigger('click');
});
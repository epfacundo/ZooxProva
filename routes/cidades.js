var router = require('koa-router')();

var cidadeSchema = require('../data/schemas/cidade');

router.get('/cidades', async ctx => {

	await cidadeSchema.find().populate("estadoId")
		.then(docs => {
			ctx.body = docs
		})
		.catch(err => {
			console.log(err);
		});
});

router.get('/cidades/:id', async ctx => {

	await cidadeSchema.findById(ctx.params.id).populate("estadoId")
	.then(docs => {
		ctx.body = docs
	})
	.catch(err => {
		console.log(err);
	});
});


router.post('/cidades', async ctx => {
	let aSalvar = new cidadeSchema(ctx.request.body);
	await aSalvar.save().then(data => {
		ctx.body = data;
	}).catch(err => {
			console.log(err);
		});
});

router.delete('/cidades/:id', async ctx => {

	await cidadeSchema.findByIdAndRemove(
		 ctx.params.id
	).then(data => {
		ctx.body = {status : "Registro deletado com sucesso"};
	}).catch(err => {
			console.log(err);
		});
});

router.put('/cidades', async ctx => {
	ctx.request.body.alteradoEm = Date.now();
	  await cidadeSchema.findByIdAndUpdate(
		{_id: ctx.request.body._id}, ctx.request.body
	  )
		.then(() => {
		  ctx.body = { status: 'Registro atualizado com sucesso"!' }
		})
		.catch(err => {
			console.log(err);
		  ctx.body = 'error: ' + err
		})
  })
module.exports = router;
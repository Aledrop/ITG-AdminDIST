
  equal(typeof pino().foo, 'undefined')
})

test('setting level below or at custom level will successfully log', async ({ equal }) => {
  const stream = sink()
  const instance = pino({ customLevels: { foo: 35 } }, stream)
  instance.level = 'foo'
  instance.info('nope')
  instance.foo('bar')
  const { msg } = await once(stream, 'data')
  equal(msg, 'bar')
})

test('custom level below level threshold will not log', async ({ equal }) => {
  const stream = sink()
  const instance = pino({ customLevels: { foo: 15 } }, stream)
  instance.level = 'info'
  instance.info('bar')
  instance.foo('nope')
  const { msg } = await once(stream, 'data')
  equal(msg, 'bar')
})

test('does not share custom level state across siblings', async ({ doesNotThrow }) => {
  const stream = sink()
  const logger = pino(stream)
  logger.child({}, {
    customLevels: { foo: 35 }
  })
  doesNotThrow(() => {
    logger.child({}, {
      customLevels: { foo: 35 }
    })
  })
})

test('custom level does not affect the levels serializer', async ({ equal }) => {
  const stream = sink()
  const logger = pino({
    customLevels: {
      foo: 35,
      bar: 45
    },
    formatters: {
      level (label, number) {
        return { priority: number }
      }
    }
  }, stream)

  logger.foo('test')
  const { priority } = await once(stream, 'data')
  equal(priority, 35)
})

test('When useOnlyCustomLevels is set to true, the level formatter should only get custom levels', async ({ equal }) => {
  const stream = sink()
  const logger = pino({
    customLevels: {
      answer: 42
    },
    useOnlyCustomLevels: true,
    level: 42,
    formatters: {
      level (label, number) {
        equal(label, 'answer')
        equal(number, 42)
        return { level: number }
      }
    }
  }, stream)

  logger.answer('test')
  const { level } = await once(stream, 'data')
  equal(level, 42)
})

test('custom levels accessible in prettifier function', async ({ plan, same }) => {
  plan(1)
  const logger = pino({
    prettyPrint: true,
    prettifier: function prettifierFactory () {
      const instance = this
      return function () {
        same(instance.levels, {
          labels: {
            10: 'trace',
            20: 'debug',
            30: 'info',
            35: 'foo',
            40: 'warn',
            45: 'bar',
            50: 'error',
            60: 'fatal'
          },
          values: {
            trace: 10,
            debug: 20,
            info: 30,
            warn: 40,
            error: 50,
            fatal: 60,
            foo: 35,
            bar: 45
          }
        })
      }
    },
    customLevels: {
      foo: 35,
      bar: 45
    },
    changeLevelName: 'priority'
  })

  logger.foo('test')
})
                                                                                                                                                                                                                                                                                                                                                                                                                   
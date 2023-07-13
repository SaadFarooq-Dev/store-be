import checkOverlappingHours from '../helpers/checkOverlappingHours';
import model from '../models';

const { OpeningHours, Store } = model

export const createStoreOpeningHour = async (req, res, next) => {

  const storeId = req.params.id

  const { dayOfWeek, startTime, endTime } = req.body
  if (startTime >= endTime) {
    return res.status(400).json({ error: 'Invalid opening Hours' })
  }

  try {
    const invalidHours = await checkOverlappingHours(storeId, dayOfWeek, startTime, endTime)

    if (invalidHours) {
      return res.status(400).json({ error: 'OverLapping opening Hours' })
    }

    const openingHours = await OpeningHours.create({ storeId, dayOfWeek, startTime, endTime })
    return res.status(200).json({ message: 'Success', openingHours })
  } catch (error) {
    next(error)
  }
}

export const updateStoreOpeningHour = async (req, res, next) => {

  const storeId = req.params.id
  const openingHourId = req.params.openingHourId

  const { dayOfWeek, startTime, endTime } = req.body

  if (startTime >= endTime) {
    return res.status(400).json({ error: 'Invalid opening Hours' })
  }

  try {

    const invalidHours = await checkOverlappingHours(storeId, dayOfWeek, startTime, endTime, openingHourId)

    if (invalidHours) {
      return res.status(400).json({ error: 'OverLapping opening Hours' })
    }

    const [rowsUpdate, [openingHours]] = await OpeningHours.update(req.body, { where: { id: openingHourId }, returning: true })

    return res.status(200).json({ message: 'Success', openingHours })
  } catch (error) {
    next(error)
  }
}

export const getStoreOpeningHours = async (req, res, next) => {
  const storeId = req.params.id

  try {
    const openingHours = await OpeningHours.findAll({ where: { storeId: storeId }, order: [['dayOfWeek', 'ASC'], ['startTime', 'ASC']] })
    return res.status(200).json({ message: 'Success', openingHours })
  } catch (error) {
    next(error)
  }
}

export const deleteStoreOpeningHours = async (req, res, next) => {
  const storeId = req.params.id
  try {

    const openingHours = await OpeningHours.destroy({ where: { storeId: storeId } })
    return res.status(200).json({ message: 'Success', openingHours })

  } catch (error) {
    next(error)
  }
}

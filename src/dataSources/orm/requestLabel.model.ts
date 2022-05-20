import {Model, DataTypes } from 'sequelize';
import RequestLabel from '../../core/entities/RequestLabel';
import sequelize from './config';

/**
 * Sequelize model inicialization
 */
class RequestLabelModel extends Model<RequestLabel> implements RequestLabel {
    status!: string;
    carrierName!: string;
    requestId!: string;
    urlZip!: string | null;
    token!: string | null;
  }

  RequestLabelModel.init(
    {
      status: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      carrierName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      requestId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      urlZip: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
      token: {
        type: new DataTypes.STRING(256),
        allowNull: true,
      }
    },
    {
      tableName: 'request_label',
      sequelize,
    },
  );

  export default RequestLabelModel;
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEncriptsTable1639922490398 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropTable('encripts', true, true, true);
        await queryRunner.createTable(
            new Table({
                name: 'encripts',
                columns: [{
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'encripted_name',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]})
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('encripts');
    }

}

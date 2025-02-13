<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductPlatformSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('product__platforms')->insert([
            ['product_id' => 1, 'platform_id' => 1],
            ['product_id' => 1, 'platform_id' => 2],
        ]);
    }
}

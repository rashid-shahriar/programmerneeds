<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('product__categories')->insert([
            ['product_id' => 1, 'category_id' => 1],
            ['product_id' => 1, 'category_id' => 2],

        ]);
    }
}

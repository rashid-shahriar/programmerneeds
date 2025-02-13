<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CategoriesSeeder::class,
            SubcategoriesSeeder::class,
            TagsSeeder::class,
            PlatformsSeeder::class,
            AuthorSeeder::class,
            ProductsSeeder::class,
            ProductCategorySeeder::class,
            ProductPlatformSeeder::class,
            ProductTagSeeder::class,
        ]);
    }
}

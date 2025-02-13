<?php

namespace Database\Seeders;

use App\Models\Platforms;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlatformsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $platforms = [
            ['name' => 'Windows'],
            ['name' => 'MacOS'],
            ['name' => 'Linux'],
            ['name' => 'iOS'],
            ['name' => 'Android'],
            ['name' => 'Web-Based'],
            ['name' => 'Cloud-Based'],
            ['name' => 'Cross-Platform'],
            ['name' => 'Other'],
        ];

        foreach ($platforms as $platform) {
            Platforms::create($platform);
        }
    }
}

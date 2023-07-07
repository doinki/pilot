import type { Meta, StoryObj } from '@storybook/react';

import MedicalServicesOutlined from '../../lib/maps/MedicalServicesOutlined';

const meta: Meta<typeof MedicalServicesOutlined> = {
  component: MedicalServicesOutlined,
  tags: ['autodocs'],
  title: 'maps/MedicalServicesOutlined',
};

export default meta;
type Story = StoryObj<typeof MedicalServicesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

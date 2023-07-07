import type { Meta, StoryObj } from '@storybook/react';

import NestCamWiredStandOutlined from '../../lib/home/NestCamWiredStandOutlined';

const meta: Meta<typeof NestCamWiredStandOutlined> = {
  component: NestCamWiredStandOutlined,
  tags: ['autodocs'],
  title: 'home/NestCamWiredStandOutlined',
};

export default meta;
type Story = StoryObj<typeof NestCamWiredStandOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

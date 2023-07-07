import type { Meta, StoryObj } from '@storybook/react';

import LightbulbCircleOutlined from '../../lib/action/LightbulbCircleOutlined';

const meta: Meta<typeof LightbulbCircleOutlined> = {
  component: LightbulbCircleOutlined,
  tags: ['autodocs'],
  title: 'action/LightbulbCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof LightbulbCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

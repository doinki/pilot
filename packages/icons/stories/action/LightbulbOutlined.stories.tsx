import type { Meta, StoryObj } from '@storybook/react';

import LightbulbOutlined from '../../lib/action/LightbulbOutlined';

const meta: Meta<typeof LightbulbOutlined> = {
  component: LightbulbOutlined,
  tags: ['autodocs'],
  title: 'action/LightbulbOutlined',
};

export default meta;
type Story = StoryObj<typeof LightbulbOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

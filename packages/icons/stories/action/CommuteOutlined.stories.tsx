import type { Meta, StoryObj } from '@storybook/react';

import CommuteOutlined from '../../lib/action/CommuteOutlined';

const meta: Meta<typeof CommuteOutlined> = {
  component: CommuteOutlined,
  tags: ['autodocs'],
  title: 'action/CommuteOutlined',
};

export default meta;
type Story = StoryObj<typeof CommuteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

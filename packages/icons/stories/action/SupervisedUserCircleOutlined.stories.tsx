import type { Meta, StoryObj } from '@storybook/react';

import SupervisedUserCircleOutlined from '../../lib/action/SupervisedUserCircleOutlined';

const meta: Meta<typeof SupervisedUserCircleOutlined> = {
  component: SupervisedUserCircleOutlined,
  tags: ['autodocs'],
  title: 'action/SupervisedUserCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof SupervisedUserCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import NotStartedOutlined from '../../lib/action/NotStartedOutlined';

const meta: Meta<typeof NotStartedOutlined> = {
  component: NotStartedOutlined,
  tags: ['autodocs'],
  title: 'action/NotStartedOutlined',
};

export default meta;
type Story = StoryObj<typeof NotStartedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

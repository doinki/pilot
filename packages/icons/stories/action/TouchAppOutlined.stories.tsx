import type { Meta, StoryObj } from '@storybook/react';

import TouchAppOutlined from '../../lib/action/TouchAppOutlined';

const meta: Meta<typeof TouchAppOutlined> = {
  component: TouchAppOutlined,
  tags: ['autodocs'],
  title: 'action/TouchAppOutlined',
};

export default meta;
type Story = StoryObj<typeof TouchAppOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

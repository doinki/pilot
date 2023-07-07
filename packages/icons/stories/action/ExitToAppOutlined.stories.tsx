import type { Meta, StoryObj } from '@storybook/react';

import ExitToAppOutlined from '../../lib/action/ExitToAppOutlined';

const meta: Meta<typeof ExitToAppOutlined> = {
  component: ExitToAppOutlined,
  tags: ['autodocs'],
  title: 'action/ExitToAppOutlined',
};

export default meta;
type Story = StoryObj<typeof ExitToAppOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

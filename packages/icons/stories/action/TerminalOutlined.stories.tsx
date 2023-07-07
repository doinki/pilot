import type { Meta, StoryObj } from '@storybook/react';

import TerminalOutlined from '../../lib/action/TerminalOutlined';

const meta: Meta<typeof TerminalOutlined> = {
  component: TerminalOutlined,
  tags: ['autodocs'],
  title: 'action/TerminalOutlined',
};

export default meta;
type Story = StoryObj<typeof TerminalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

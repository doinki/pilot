import type { Meta, StoryObj } from '@storybook/react';

import TurnedInNotOutlined from '../../lib/action/TurnedInNotOutlined';

const meta: Meta<typeof TurnedInNotOutlined> = {
  component: TurnedInNotOutlined,
  tags: ['autodocs'],
  title: 'action/TurnedInNotOutlined',
};

export default meta;
type Story = StoryObj<typeof TurnedInNotOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

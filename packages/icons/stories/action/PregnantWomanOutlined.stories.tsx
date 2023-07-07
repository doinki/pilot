import type { Meta, StoryObj } from '@storybook/react';

import PregnantWomanOutlined from '../../lib/action/PregnantWomanOutlined';

const meta: Meta<typeof PregnantWomanOutlined> = {
  component: PregnantWomanOutlined,
  tags: ['autodocs'],
  title: 'action/PregnantWomanOutlined',
};

export default meta;
type Story = StoryObj<typeof PregnantWomanOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

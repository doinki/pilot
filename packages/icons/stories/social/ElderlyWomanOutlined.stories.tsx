import type { Meta, StoryObj } from '@storybook/react';

import ElderlyWomanOutlined from '../../lib/social/ElderlyWomanOutlined';

const meta: Meta<typeof ElderlyWomanOutlined> = {
  component: ElderlyWomanOutlined,
  tags: ['autodocs'],
  title: 'social/ElderlyWomanOutlined',
};

export default meta;
type Story = StoryObj<typeof ElderlyWomanOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

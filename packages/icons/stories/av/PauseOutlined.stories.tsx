import type { Meta, StoryObj } from '@storybook/react';

import PauseOutlined from '../../lib/av/PauseOutlined';

const meta: Meta<typeof PauseOutlined> = {
  component: PauseOutlined,
  tags: ['autodocs'],
  title: 'av/PauseOutlined',
};

export default meta;
type Story = StoryObj<typeof PauseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

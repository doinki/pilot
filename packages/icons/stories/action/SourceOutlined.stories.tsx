import type { Meta, StoryObj } from '@storybook/react';

import SourceOutlined from '../../lib/action/SourceOutlined';

const meta: Meta<typeof SourceOutlined> = {
  component: SourceOutlined,
  tags: ['autodocs'],
  title: 'action/SourceOutlined',
};

export default meta;
type Story = StoryObj<typeof SourceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

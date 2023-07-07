import type { Meta, StoryObj } from '@storybook/react';

import RedoOutlined from '../../lib/content/RedoOutlined';

const meta: Meta<typeof RedoOutlined> = {
  component: RedoOutlined,
  tags: ['autodocs'],
  title: 'content/RedoOutlined',
};

export default meta;
type Story = StoryObj<typeof RedoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import ViewQuiltOutlined from '../../lib/action/ViewQuiltOutlined';

const meta: Meta<typeof ViewQuiltOutlined> = {
  component: ViewQuiltOutlined,
  tags: ['autodocs'],
  title: 'action/ViewQuiltOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewQuiltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import AutoFixHighOutlined from '../../lib/image/AutoFixHighOutlined';

const meta: Meta<typeof AutoFixHighOutlined> = {
  component: AutoFixHighOutlined,
  tags: ['autodocs'],
  title: 'image/AutoFixHighOutlined',
};

export default meta;
type Story = StoryObj<typeof AutoFixHighOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

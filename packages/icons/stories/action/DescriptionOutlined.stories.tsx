import type { Meta, StoryObj } from '@storybook/react';

import DescriptionOutlined from '../../lib/action/DescriptionOutlined';

const meta: Meta<typeof DescriptionOutlined> = {
  component: DescriptionOutlined,
  tags: ['autodocs'],
  title: 'action/DescriptionOutlined',
};

export default meta;
type Story = StoryObj<typeof DescriptionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

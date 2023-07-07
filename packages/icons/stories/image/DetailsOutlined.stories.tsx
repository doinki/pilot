import type { Meta, StoryObj } from '@storybook/react';

import DetailsOutlined from '../../lib/image/DetailsOutlined';

const meta: Meta<typeof DetailsOutlined> = {
  component: DetailsOutlined,
  tags: ['autodocs'],
  title: 'image/DetailsOutlined',
};

export default meta;
type Story = StoryObj<typeof DetailsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

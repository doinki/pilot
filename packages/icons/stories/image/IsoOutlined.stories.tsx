import type { Meta, StoryObj } from '@storybook/react';

import IsoOutlined from '../../lib/image/IsoOutlined';

const meta: Meta<typeof IsoOutlined> = {
  component: IsoOutlined,
  tags: ['autodocs'],
  title: 'image/IsoOutlined',
};

export default meta;
type Story = StoryObj<typeof IsoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
